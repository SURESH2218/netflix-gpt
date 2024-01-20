import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="h-[50vw] pt-64 pl-12 absolute  text-white bg-gradient-to-r from-black ">
      <h1 className="font-bold text-3xl">{title}</h1>
      <h2 className="py-6 text-lg w-1/4">{overview}</h2>
      <div className="flex gap-5">
        <button className="bg-white text-black px-6 py-1 rounded-md hover:opacity-65">
          Play
        </button>
        <button className="bg-slate-400 text-black px-6 py-1 rounded-md">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
