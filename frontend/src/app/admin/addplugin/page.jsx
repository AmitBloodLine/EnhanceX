'use client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'

const AddPlugin = () => {

    const router = useRouter();
    const [plugin, setPlugin] =useState([]);

    const pluginForm = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: ''



        },
        onSubmit: (values) => {
            values.image = plugin.name
            console.log(values);

            fetch('http://localhost:5000/plugin/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        enqueueSnackbar('Plugin Added successfully', { variant: 'success' })
                        router.push("/browse")
                    } else {
                        enqueueSnackbar('Something went wrong', { variant: 'error' })
                    }
                }).catch((err) => {
                    console.log(err);
                    enqueueSnackbar('Something went wrong', { variant: 'error' });
                });

        },

    });

    const uploadImages = (e) => {
        const file = e.target.files[0];
        setPlugin(file);
        const pg = new FormData();
        pg.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile",{
            method: "POST",
            body: pg,
        }).then((res) => {
            if(res.status === 200){
                console.log("file uploaded");
                enqueueSnackbar("file uploaded",{variant:"success"})
            }
        }) 
    }
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
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
                    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={pluginForm.handleSubmit}>

                        <div className="sm:col-span-2">
                            <label
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Title
                            </label>
                            <input
                               type='text'
                                id='title'
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                value={pluginForm.values.title}
                                onChange={pluginForm.handleChange}
                            />
                            {
                                pluginForm.touched.title &&
                                <span className="text-red">{pluginForm.errors.title}</span>
                            }
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Description*
                            </label>
                            <input
                                type='text'
                                id='description'
                                value={pluginForm.values.description}
                                onChange={pluginForm.handleChange}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                            {
                                pluginForm.touched.description &&
                                <span className="text-red">{pluginForm.errors.description}</span>
                            }
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Upload Images*
                            </label>
                            <input
                            onChange={uploadImages}
                                type='file'
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        {/* <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Message*
        </label>
        <textarea
          name="message"
          className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          defaultValue={""}
        />
      </div> */}
                        <div className="flex items-center justify-between sm:col-span-2">
                            <button type='submit' className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                Add Plugins
                            </button>

                        </div>

                    </form>
                    {/* form - end */}
                </div>
            </div>

        </div>
    )
}

export default AddPlugin
