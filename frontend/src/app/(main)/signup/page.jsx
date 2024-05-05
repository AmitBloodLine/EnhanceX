"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();

  const signupValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username required"),
    email: Yup.string().required("Email is required").email("Email is Invalid"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const signupForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);

      fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar("User Added successfully", { variant: "success" });
            router.push("/login");
          } else {
            enqueueSnackbar("Something went wrong", { variant: "error" });
          }
        })
        .catch((err) => {
          console.log(err);
          enqueueSnackbar("Something went wrong", { variant: "error" });
        });
    },
    validationSchema: signupValidationSchema,
  });

  return (
    <>
      <main>
        <div className="container mx-auto px-20">
          <div className="flex justify-center">
            <div className="w-full lg:w-4/12 px-4 pt-40">
              <div className="w-full shadow-lg rounded-lg bg-gray-300">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
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
                      {signupForm.touched.username && (
                        <small className="text-red-500">
                          {signupForm.errors.username}
                        </small>
                      )}
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
                      {signupForm.touched.email && (
                        <small className="text-red-500">
                          {signupForm.errors.email}
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
                        onChange={signupForm.handleChange}
                        value={signupForm.values.password}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style={{ transition: "all .15s ease" }}
                      />
                      {signupForm.touched.password && (
                        <small className="text-red-500">
                          {signupForm.errors.password}
                        </small>
                      )}
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
                        id="confirmPassword"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.confirmPassword}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Confirm Password"
                        style={{ transition: "all .15s ease" }}
                      />
                      {signupForm.touched.confirmPassword && (
                        <small className="text-red-500">
                          {signupForm.errors.confirmPassword}
                        </small>
                      )}
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
                    <Link className="text-gray-700 text-md" href="/login">
                      Already Have Account?
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
