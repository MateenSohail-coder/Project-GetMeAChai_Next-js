import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="text-neutral-50 flex justify-between px-8 py-5 bg-[#111827]">
        <div className="brand font-bold text-xl">GetMeAChai!</div>
        <ul className="flex gap-1.5 justify-center items-center">
          <li>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-gradient-to-bl focus:ring-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2"
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
          <li>
            {" "}
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
