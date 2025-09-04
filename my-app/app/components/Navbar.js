"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [showdropdown, setshowdropdown] = useState(false);
  const [searchbox, setsearchbox] = useState(false);
  return (
    <>
      <nav className="text-neutral-50 flex justify-between px-8 py-5 bg-[#111827]">
        <Link href="/" className="flex items-center">
          <img
            src="/cup.gif"
            className="md:w-9 md:h-9 h-15 w-15 transform -translate-y-3.5 md:-translate-y-1"
            alt=""
          />
          <div className="brand font-bold text-xl hidden md:block">
            GetMeAChai!
          </div>
        </Link>
        <ul className="flex gap-1.5">
          <li>
            <button
              onBlur={() => {
                setsearchbox(false);
              }}
              onClick={() => {
                setsearchbox(!searchbox);
              }}
              type="button"
              className="text-white cursor-pointer bg-blue-600 hover:bg-gradient-to-bl focus:ring-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2"
            >
              <lord-icon
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#848484"
                style={{ width: "23px", height: "23px" }}
              ></lord-icon>
            </button>
          </li>
          {session && (
            <div className="flex flex-col items-center">
              <button
                id="dropdownDefaultButton"
                onBlur={() => {
                  setTimeout(() => {
                    setshowdropdown(false);
                  }, 100);
                }}
                onClick={() => {
                  setshowdropdown(!showdropdown);
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                <div className="w-[13ch] md:w-[20ch] overflow-hidden truncate">
                  Welcome {session?.user?.email}
                </div>
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  !showdropdown && "hidden"
                } bg-white divide-y mt-12 absolute divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.email}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your page
                    </Link>
                  </li>

                  <li>
                    <a
                      onClick={async () => {
                        await signOut({ redirect: false });
                        router.push("/login");
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {session && (
            <li className="hidden md:block">
              <button
                onClick={async () => {
                  await signOut({ redirect: false });
                  router.push("/login");
                }}
                type="button"
                className="text-white cursor-pointer bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Logout
              </button>
            </li>
          )}
          {!session && (
            <li>
              <Link href="/login">
                <button
                  type="button"
                  className="text-white cursor-pointer bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {searchbox && (
        <>
          <div className=" bg-black/30 absolute w-full md:w-auto  z-50 flex items-center justify-center transition-all duration-5000">
            <form className="w-100 mx-auto ">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search favourite creator..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
