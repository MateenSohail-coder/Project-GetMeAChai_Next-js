"use client"
import React from "react";
import { useSession} from "next-auth/react";
export default function page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return ;
  }    const decoded = decodeURIComponent(session.user.email);

  const displayName = decoded.split("@")[0];
  return (
    <div>
      <form>
        <div className="grid gap-3 col-end-1 md:w-[40%] mx-auto py-7 w-[90%]">
          <div className="text-center font-bold text-white text-3xl">
            Welcome To Dashboard
          </div>
          <div>
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="bg-gray-50 h-7 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="bg-gray-50 h-7  cursor-not-allowed text-gray-900 text-sm rounded-lg f block w-full p-2.5 dark:bg-gray-700 border-0 focus:outline-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={session.user.email} 
              readOnly
              required
            />
          </div>
          <div>
            <label
              htmlFor="Username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="username"
              id="Username"
              className="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john"
              required
            />
          </div>
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input
              type="Url"
              id="url"
              className="bg-gray-50 h-7 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input
              type="Url"
              id="url"
              className="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="razorpay-Id"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              razorpay Id
            </label>
            <input
              type="text"
              id="razorpay-Id"
              className="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="razorpay-Secret"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              razorpay Secret
            </label>
            <input
              type="text"
              id="razorpay-Secret"
              className="bg-gray-50 border h-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
