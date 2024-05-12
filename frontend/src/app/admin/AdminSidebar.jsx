import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (

    <>
      {/* Navigation Toggle */}
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="flex-shrink-0 size-12"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      {/* End Navigation Toggle */}

      {/* Sidebar */}
      <div
        id="docs-sidebar"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 border-e bg-gray-50 dark:bg-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <div className="px-6">
          <Link
            href="#"
            className="flex justify-start text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src="/AI-EnhanceX.png"
              className="h-12"
              alt="AI EnhanceX Logo"
            />
          </Link>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open=""
        >
          <ul className="space-y-1.5">
            <li>
              <p
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-lg font-bold"
              >
                Dashboard
              </p>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link
                href="/admin/manageuser">
                <button
                  type="button"
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg dark:hover:bg-cyan-900 dark:hover:text-neutral-300 w-full"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Manage Users
                </button>
              </Link>

            </li>
            <li className="hs-accordion" id="account-accordion">
              <Link
                href="#">
                <button
                  type="button"
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg dark:hover:bg-cyan-900 dark:hover:text-neutral-300 w-full"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={18} cy={15} r={3} />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                    <path d="m21.7 16.4-.9-.3" />
                    <path d="m15.2 13.9-.9-.3" />
                    <path d="m16.6 18.7.3-.9" />
                    <path d="m19.1 12.2.3-.9" />
                    <path d="m19.6 18.7-.4-1" />
                    <path d="m16.8 12.3-.4-1" />
                    <path d="m14.3 16.6 1-.4" />
                    <path d="m20.7 13.8 1-.4" />
                  </svg>
                  Inbox
                </button>
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg dark:hover:bg-cyan-900 dark:hover:text-neutral-300"
                href="#"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Manage Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Sidebar */}
    </>

  );
};

export default AdminSidebar;
