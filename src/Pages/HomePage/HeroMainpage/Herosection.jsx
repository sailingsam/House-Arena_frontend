import allhouse from "../../../assets/logos/aigenerated/p.png";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-20 mx-auto max-w-screen-xl pb-12 px-4 items-center md:flex md:items-center md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
          Track the Glory of Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5e45ff] to-[#f6ff00]">
            {" "}
            Houses
          </span>
        </h1>
        <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 font-semibold">
          At <b className="text-lg text-white">Scaler School of Technology</b>{" "}
          we have 4 houses: House of Kong, Leo, Phoenix & Tusker. <br /> House
          Arena is your one-stop platform for tracking house points, viewing
          past events, and fostering a competitive spirit within your individul
          houses.
        </p>
        <div className="sm:pt-10 text-center items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          <NavLink
            to="/leaderboardandevents"
            className="m-auto sm:m-0 mb-5 flex justify-center items-center border-2 border-radius border-white-200 overflow-hidden w-fit p-1 rounded-full shadow-lg"
          >
            <button className="bg-[linear-gradient(#e9e9e9,#e9e9e9_50%,#fff)] group w-50 h-14 inline-flex transition-all duration-300 overflow-visible p-1 rounded-full group">
              <div className="w-full h-full bg-[linear-gradient(to_top,#ececec,#fff)] overflow-hidden shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] p-1 rounded-full hover:shadow-none duration-300">
                <div className="w-full h-full text-xl gap-x-0.5 gap-y-0.5 justify-center text-[#101010] bg-[linear-gradient(#f4f4f4,#fefefe)] group-hover:bg-[linear-gradient(#e2e2e2,#fefefe)] duration-200 items-center text-[18px] font-medium gap-4 inline-flex overflow-hidden px-4 py-1 rounded-full black group-hover:text-blue-600">
                  <span className="">LeaderBoard & Past Events</span>
                </div>
              </div>
            </button>
          </NavLink>
          <a href={"https://github.com/sailingsam/House-Arena_frontend"} target="_blank">
            <button class="text-zinc-400 hover:text-purple-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-purple-600 duration-700">
              Contribute
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 md:mt-0 lg:mt-0 lg:ml-3">
        <img src={allhouse} className="w-3/4 mx-auto sm:w-80" />
      </div>
    </section>
  );
};
