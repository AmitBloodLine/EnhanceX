'use client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Contact = () => {

  const router = useRouter()

  const contactForm = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      message: '',
      number: ''


    },
    onSubmit: (values) => {
      console.log(values);

      fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('Contact Added successfully', { variant: 'success' })
            router.push("/")
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' })
          }
        }).catch((err) => {
          console.log(err);
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        });

    },

  });
  return (
    <div>
      <div className="bg-white py-10 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Get in touch
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as placeholder
              text. It shares some characteristics of a real written text but is
              random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          {/* form - start */}
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={contactForm.handleSubmit}>
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                First name*
              </label>
              <input
                type='text'
                id='fname'
                value={contactForm.values.fname}
                onChange={contactForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              {
                contactForm.touched.fname &&
                <span className="text-red">{contactForm.errors.fname}</span>
              }
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                type='text'
                id='lname'
                value={contactForm.values.lname}
                onChange={contactForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
                {
                contactForm.touched.lname &&
                <span className="text-red">{contactForm.errors.lname}</span>
              }
            </div>
            {/* <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Company
        </label>
        <input
          name="company"
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div> */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                name="email"
                id='email'
                value={contactForm.values.email}
                onChange={contactForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              {
                contactForm.touched.email &&
                <span className="text-red">{contactForm.errors.email}</span>
              }
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Number*
              </label>
              <input
                type='number'
                id="number"
                value={contactForm.values.number}
                onChange={contactForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              {
                contactForm.touched.number &&
                <span className="text-red">{contactForm.errors.number}</span>
              }
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Message*
              </label>
              <textarea
                name="message"
                id="message"
                value={contactForm.values.message}
                onChange={contactForm.handleChange}
                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
              {
                contactForm.touched.message &&
                <span className="text-red">{contactForm.errors.message}</span>
              }
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
              <button type='sumbit' className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>
              <span className="text-sm text-gray-500">*Required</span>
            </div>
            <p className="text-xs text-gray-400">
              By signing up to our newsletter you agree to our{" "}
              <a
                href="#"
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
          {/* form - end */}
        </div>
      </div>


    </div>
  )
}

export default Contact
