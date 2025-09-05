"use client";

import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="h-auto ">
        <div className="h-[90vh] py-8 px-4  max-w-screen-xl text-center flex items-center justify-center flex-col lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl flex items-center justify-center font-bold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-neutral-300 ">
            Get Me A Chai
            <img
              src="/cup.gif"
              className="inline md:mx-5 mx-0 h-17 w-17"
              alt=""
            />
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            A Crowdfunding platform for creaters. Get funded by your fans and
            followers. Start Now!
          </p>

          <div className="buttons">
            <Link href="/login">
              <button
                type="button"
                className="text-white cursor-pointer bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Start Here
              </button>
            </Link>
            <button
              onClick={() => {
                document
                  .getElementById("aboutus")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              type="button"
              className="text-white cursor-pointer bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white opacity-15 h-1 w-full"></div>
        <div className="text-white h-[60vh] justify-between flex flex-col py-13">
          <h1 className="text-center font-bold text-2xl">
            Your fans can buy you a chai
          </h1>
          <div className="flex justify-around gap-3">
            <div className="text-center flex flex-col items-center justify-center gap-3.5">
              <div className=" bg-amber-50  md:h-23 h-20 md:w-23 w-20 p-2 rounded-full">
                <img src="/man.gif" alt="" />
              </div>
              <div className="font-bold text-center">Fund Yourself</div>
              <p className="text-center px-2">
                your fans are available to help you
              </p>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-3.5">
              <div className=" bg-amber-50  md:h-23 h-20 md:w-23 w-20 p-2 rounded-full">
                <img src="/coin.gif" alt="" />
              </div>
              <div className="font-bold text-center">Fund Yourself</div>
              <p className="text-cente px-2r">
                your fans are available to help you
              </p>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-1 md:gap-3.5">
              <div className=" bg-amber-50  md:h-23 h-20 md:w-23 w-20 p-2 rounded-full">
                <img src="/community.gif" alt="" />
              </div>
              <div className="font-bold text-center">Fans wants to help</div>
              <p className="text-center px-2">
                your fans are available to help you
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white opacity-15 h-1 w-full"></div>
        <div
          id="aboutus"
          className="md:h-[70vh] h-[110vh] flex flex-col justify-around text-white px-12 py-7"
        >
          <div className="text-center font-bold text-2xl ">
            Learn More About Us
          </div>
          <div className="flex flex-col gap-10 text-1xl">
            <p className="text-center">
              At Get Me A Chai, we are dedicated to supporting developers,
              creators, and influencers by connecting them with their
              supporters. Our platform enables individuals to fund their
              projects and ideas, providing a space where creativity and
              innovation can thrive.
            </p>
            <p className="text-center">
              Our mission is to empower talented individuals by facilitating
              financial support, allowing them to focus on what they do best –
              creating. Whether you're a developer coding the next big app, a
              content creator making engaging videos, or an influencer sharing
              your passion, Get Me A Chai is here to help you achieve your
              goals.
            </p>
            <p className="text-center">
              We believe in the power of community and the impact of collective
              support. By providing a platform for patrons to contribute, we aim
              to transform dreams into reality and foster a culture of
              creativity and innovation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
