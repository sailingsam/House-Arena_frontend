import React from "react";

export default function Loader({LoaderData}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
      <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        {`${LoaderData}`}
      </p>
    </div>
  );
}
