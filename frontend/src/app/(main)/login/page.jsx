"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {

const router = useRouter();
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is Invalid"),
    password: Yup.string().required("Password is required"),
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar("User Login successfully", {
              variant: "success",
            });
             router.push("/contact")
          } else {
            enqueueSnackbar("Something went wrong", { variant: "error" });
          }
        })
        .catch((err) => {
          console.log(err);
          enqueueSnackbar("Something went wrong", { variant: "error" });
        });
    },

    validationSchema: loginValidationSchema,
  });

  return (
    <>
    
      <main className="min-h-screen flex items-center"

        style={
        {backgroundImage: `url('https://wallpapercave.com/wp/wp9314317.jpg')`,
        backgroundSize: 'cover',
        }}>

          <div className="container mx-auto px-4 h-full">
            <p className="text-7xl font-medium text-sky-400">
              Welcome Back
            </p>
            <p className="pt-4 text-4xl text-white">
              Login to your account
            </p>
            <div className="w-full flex justify-end">
              <div className="w-full lg:w-4/12 px-4">
                <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6 text-center text-lg font-bold text-gray-700">
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={loginForm.handleSubmit}>
                      <div className=" w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.email}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                        {loginForm.touched.email && loginForm.errors.email && (
                          <small className="text-red-500">
                            {loginForm.errors.email}
                          </small>
                        )}
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
                          onChange={loginForm.handleChange}
                          value={loginForm.values.password}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                        {loginForm.touched.password &&
                          loginForm.errors.password && (
                            <small className="text-red-500">
                              {loginForm.errors.password}
                            </small>
                          )}
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Login
                        </button>
                      </div>
                      <Link 
                      className="text-gray-700"
                      href="/signup">Create new account
                      </Link><br></br>
                      <Link 
                      className="text-blue-700"
                      href="#">Forgot Password?
                      </Link>                     
                    </form>
                  </div>
                </div>             
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
