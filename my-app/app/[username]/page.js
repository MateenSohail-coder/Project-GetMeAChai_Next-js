import React from "react";

export default async function username({ params }) {
  const { username } = await params;
  const decoded = decodeURIComponent(username);

  const displayName = decoded.split("@")[0];
  return (
    <div>
      <div className="pics w-full">
        <div className="coverprofilepic h-[50vh]  bg-[url('/coverpic.png')] flex justify-center items-end"></div>
        <div className="-translate-y-23 flex flex-col items-center text-white gap-2 px-2.5 text-center">
          <img src="profilepic.png" alt="" className="h-35 w-35 rounded-2xl " />
          <div className="name font-bold text-xl">@{displayName}</div>
          <div className="message text-1xl">
            Let&apos;s Help @{displayName} to get a cup of tea
          </div>
          <div className="ratio flex text-neutral-500">
            <div className="supporters">0 Supporters</div>
            <div className="rise">.₹0 raised</div>
          </div>
        </div>
        <div className="pb-15">
          <div className="portions max-h-auto h-[110vh] md:h-[65vh] w-full flex-col md:flex-row flex justify-between px-4">
            <div className="portion1 md:h-full md:w-[49%] max-h-auto w-full px-9 py-4 h-[49%] text-white bg-[#0d1425] rounded-xl">
              <div className="heading font-bold text-2xl">Supporters</div>
              <div className="list">
                <div className="text-center my-2.5 font-semibold text-xl">
                  No supporters yet ☹
                </div>
              </div>
            </div>
            <div className="portion2 md:h-full md:w-[49%] w-full h-[49%] flex flex-col gap-7 px-9 py-4 bg-[#0d1425] rounded-xl">
              <div className="heading text-white font-bold text-2xl">
                Make a payment
              </div>

              <form className="w-full mx-auto">
                <div className="mb-3">
                  <input
                    type="text"
                    id="name"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="message"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                    placeholder="Message"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    id="amount"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                    placeholder="Amount"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-gradient-to-br w-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Support
                </button>
              </form>
              <div className="bts text-white">
                <button className="md:py-2 py-1.5 px-2 active:bg-gray-700  md:px-2.5 font-semibold hover:bg-gray-700 mx-1 text-[12px] md:text-[16px] md:mx-2 bg-gray-800 rounded-sm ">
                  pay ₹10
                </button>
                <button className="md:py-2 py-1.5 px-2 active:bg-gray-700  md:px-2.5 font-semibold hover:bg-gray-700 mx-1 text-[12px] md:text-[16px] md:mx-2 bg-gray-800 rounded-sm ">
                  pay ₹30
                </button>
                <button className="md:py-2 py-1.5 px-2 active:bg-gray-700  md:px-2.5 font-semibold hover:bg-gray-700 mx-1 text-[12px] md:text-[16px] md:mx-2 bg-gray-800 rounded-sm ">
                  pay ₹50
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
