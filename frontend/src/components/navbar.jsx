'use client';
import Link from "next/link";
import React from "react";
import useUserContext from "@/context/UserContext";

const Navbar = () => {
  const {loggedIn , logout} = useUserContext();
  console.log(loggedIn);

  const showLoggedIn = () => {
    if(loggedIn) {
      return(
        <div class="sm:order-3 flex items-center gap-x-2">
             <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-red-200 bg-white text-red-600 shadow-sm hover:bg-red-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-red-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-white-800"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )
    }else{
      return(
        <div class="sm:order-3 flex items-center gap-x-2">
        <button
          type="button"
          class="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
          data-hs-collapse="#navbar-alignment"
          aria-controls="navbar-alignment"
          aria-label="Toggle navigation"
        >
          <svg
            class="hs-collapse-open:hidden flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            class="hs-collapse-open:block hidden flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        
        <Link
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-white-800"
          href="/signup"
        >
          Register
        </Link>
        <Link
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-white-800"
          href="/login"
        >
          Login
        </Link>
      
      </div>
      )
    }
  }
  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 bg-white dark:bg-gray-900">
      <nav
        class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <Link href="/" className="">
          <img
            src="/AI-EnhanceX.png"
            className="h-14 mr-3 sm:h-14"
            alt="AI EnhanceX"
          />
        </Link>
         {
          showLoggedIn()
         }
        <div
          id="navbar-alignment"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        >
          <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <Link class="font-medium text-blue-500" href="/" aria-current="page">
              Home
            </Link>
            <Link
              class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="/browse"
            >
              Browse Plugin
            </Link>
            <Link
              class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="/about"
            >
              About
            </Link>
          
            <Link
              class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="/feedback"
            >
              Feedback
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
