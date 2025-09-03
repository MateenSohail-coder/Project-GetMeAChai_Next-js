import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#111827] max-h-[30vh] md:max-h-[20vh] py-3 px-2 text-neutral-100 bottom-0">
        <div className="flex flex-col gap-3.5">
          <div className="text-[18px] font-bold">
            Copyright &copy; {new Date().getFullYear()} Get Me A Chai . All
            right reserved!
          </div>
          <div className="text-[11px} text-neutral-500">
            Made by Abdul Mateen
          </div>
          <ul className="flex gap-6 flex-wrap">
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
