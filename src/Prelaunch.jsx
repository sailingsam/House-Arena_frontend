import React from "react";
import launchimg from "./assets/blurlaunch.png";
import blaclogo from "./assets/black logo.png";

function Prelaunch() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="flex items-center justify-center w-full">
          <img
            className="w-52"
            src={blaclogo}
            alt="house arena logo"
          />
        </div>
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Exciting Launch Soon!{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              new Update for House Arena
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            V.2 of House Arena is on the way. Stay tuned for an enhanced
            experience and new features that will take our platform to the next
            level.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="https://housearenaf.vercel.app/"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Old website!
            </a>
          </div>
        </div>
        <div className="mt-14">
          <img
            src={launchimg}
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Prelaunch;
