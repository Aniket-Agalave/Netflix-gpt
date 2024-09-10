import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-16 absolute bg-gradient-to-r from-black overflow-x-scroll overflow-y-scroll hide-scrollbar no-scrollbar">
      <h1 className="font-bold text-3xl text-white">{title}</h1>
      <p className="text-md w-1/2 pt-4 text-white">{overview}</p>
      <div className="pt-4">
        <button className="text-black bg-white bg-opacity-90 font-semibold hover:bg-opacity-50 rounded-md text-sm px-6 py-2.5 me-2 mb-2">
          ▶️ Play
        </button>
        <button className="ml-2 bg-gray-500 bg-opacity-20 text-white font-semibold hover:text-white py-2 px-4 rounded-md">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
