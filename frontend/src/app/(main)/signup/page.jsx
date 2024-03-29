'use client'
import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from '@/components/Navbar';
import { enqueueSnackbar } from "notistack";

export default function Signup() {

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    email: Yup.string().required('Email is required').email('Email is Invalid'),
    password: Yup.string().required('Password is required')
  });

  const signupForm = useFormik({
    initialValues: {
        email: '',
        password: '',
        confirmpassword: '',
        
    },
    onSubmit: (values) => {
        console.log(values);

        // sending request to backend
        fetch('http://localhost:5000/user/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            console.log(response.status);
            if(response.status === 200){
                enqueueSnackbar('Post uploaded successfully', { variant: 'success' })
            }else{
                enqueueSnackbar('Something went wrong', { variant: 'error' })
            }
        }).catch((err) => {
            console.log(err);
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        });

    },
    validationSchema : loginValidationSchema
});

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-white"
            style={{

            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in 
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src="/assets/google.svg" 

                        />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={signupForm.handleSubmit}>
                    <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.username}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Username"
                          style={{ transition: "all .15s ease" }}
                        />
                        {
                          signupForm.touched.username && signupForm.errors.username &&
                          <h1 className="text-danger">{signupForm.errors.username}</h1>
                        }
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.email}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                        {
                          signupForm.touched.email &&
                          <small className="text-danger">{signupForm.errors.email}</small>
                        }
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                         {
                          signupForm.touched.password &&
                          <small className="text-danger">{signupForm.errors.password}</small>
                        }
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="Confirmpassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.Confirmpassword}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Confirm Password"
                          style={{ transition: "all .15s ease" }}
                        />
                        {
                          signupForm.touched.Confirmpassword &&
                          <small className="text-danger">{signupForm.errors.password}</small>
                        }
                      </div>
                     
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign Up
                        </button>
                      </div>
                      <a 
                      className="text-gray-700 text-md"
                      href="#">Already Have Account?</a>
                    </form>
                  </div>
                </div>          
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}