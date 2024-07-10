import { useEffect, useRef, useState } from "react";
import "./Navheader.css";
import horizontalLogo from "../../assets/horizontalLogo.png";
import { NavLink } from "react-router-dom";

function Navheader() {
  const [state, setState] = useState(true);
  const navRef = useRef();

  const navigation = [
    { title: "Home", path: "/" },
    { title: "LeaderBoard & Events", path: "/leaderboard&events" },
    // { title: "House Gates", path: "javascript:void(0)" },
  ];

  return (
    <nav ref={navRef} className="bg-black w-full top-0 z-20 sticky">
      <div className="items-center mx-10 px-5 max-w-screen-2xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-3 lg:block">
          <a href="javascript:void(0)">
            <img
              className="h-11 w-auto"
              src={horizontalLogo}
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-center flex-row-reverse items-center lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          {/* below 2 div are in reverse order (flex-row-reverse)*/}
          <div>
            {" "}
            
            <ul className="flex items-center flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              {/* github logo */}
              <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                <a
                  href="https://github.com/sailingsam/house_arena_react-vite"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50"
                    viewBox="0 0 64 64"
                  >
                    <linearGradient
                      id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1"
                      x1="30.999"
                      x2="30.999"
                      y1="16"
                      y2="55.342"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stop-color="#6dc7ff"></stop>
                      <stop offset="1" stop-color="#e6abff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)"
                      d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"
                    ></path>
                    <linearGradient
                      id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2"
                      x1="32"
                      x2="32"
                      y1="5"
                      y2="59.167"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stop-color="#1a6dff"></stop>
                      <stop offset="1" stop-color="#c822ff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)"
                      d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
                    ></path>
                  </svg>
                </a>
              </li>
              {/* signup */}
              <li className="mt-4 lg:mt-0">
                <a
                  href="javascript:void(0)"
                  className="py-3 px-4 text-center border text-white hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
                >
                  Sign up
                </a>
              </li>
              {/* github logo */}
              <li className="mt-8 lg:mt-0">
                {/* <a
                  href="javascript:void(0)"
                  className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
                >
                  Sign Up
                </a> */}
                <NavLink
                  to="/login"
                  className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
                ><span>Log In</span></NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center gap-5 space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-400">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `${isActive ? "text-white" : "text-gray-500"}`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navheader;
