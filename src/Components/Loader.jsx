import React from "react";

export default function Loader({ LoaderData }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed border-yellow-500 rounded-full animate-spin mx-auto"></div>
        <h2 className="text-white mt-4 text-2xl font-bold">Loading...</h2>
        <p className="text-gray-300 mt-2">{LoaderData}</p>
      </div>
    </div>
  );
}
