import React from "react";

export default function ProjectInfo() {
  return (
    <div className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-full max-w-64 sm:w-64 h-auto sm:h-60 bg-slate-950 rounded-xl mt-3">
      <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-8 -left-8 sm:-top-12 sm:-left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-16 h-16 sm:w-24 sm:h-24"></div>
      <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-24 left-8 sm:top-44 sm:left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-16 h-16 sm:w-24 sm:h-24"></div>
      <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-16 left-48 sm:top-24 sm:left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-16 h-16 sm:w-24 sm:h-24"></div>
      <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-6 left-6 sm:top-12 sm:left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-8 h-8 sm:w-12 sm:h-12"></div>
      <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-6 left-6 sm:top-12 sm:left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-32 h-32 sm:w-44 sm:h-44"></div>
      <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-16 -left-8 sm:-top-24 sm:-left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-48 h-48 sm:w-64 sm:h-64"></div>
      <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-16 left-6 sm:top-24 sm:left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-8 h-8 sm:w-4 sm:h-4"></div>
      <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-black rounded-xl flex-col gap-2 flex justify-center">
        <span className="text-neutral-50 z-10 font-bold text-lg sm:text-xl italic">About House Arena</span>
        <p className="text-white z-10 text-sm sm:text-base">I made this Project as part of my Buildspace N&W's S5 project as well as my MERN Course project.</p>
      </div>
    </div>
  );
}
