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
    
      <main>
      
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundColor: "#31363F",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6 text-center text-lg font-bold text-gray-700">
                    Login Here
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={loginForm.handleSubmit}>
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
                          onChange={loginForm.handleChange}
                          value={loginForm.values.email}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                        {loginForm.touched.email && loginForm.errors.email && (
                          <small className="text-danger">
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
                            <small className="text-danger">
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
                    </form>
                  </div>
                  <div className="flex flex-wrap mt-63 px-4 py-4">
                  
                  <div className="w-1/2">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-700 font-semibold"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link
                      href="/signup"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-700 font-semibold"
                    >
                      <small>Create new account</small>
                    </Link>
                  </div>
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
