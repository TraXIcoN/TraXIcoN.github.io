"use client";

import { useEffect } from "react";

const LoadingScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadingScreen = document.getElementById("loading-screen");
      const mainContent = document.getElementById("main-content");

      if (loadingScreen && mainContent) {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
    >
      <div className="relative w-[300px] h-[40px] rotate-[135deg] animate-[pencil-animation_5s_infinite]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-600 h-[10px] w-[10px] rounded-full" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900 w-[12%] h-full clip-path-polygon" />
        <div className="absolute left-[12%] top-0 h-full w-[20px] bg-gray-900" />
        <div className="absolute left-[calc(12%+20px)] top-0 h-full w-[70%] bg-red-600" />
        <div className="absolute left-[calc(12%+70%+20px)] top-0 h-full w-[11%] rounded-r-md bg-gray-900" />
      </div>
      <div className="relative top-20 -right-[103px] h-[10px] w-[1000px] -z-10 rounded-full bg-red-600 scale-x-0 animate-[line-animation_5s_infinite]" />
      <h2 className="mt-8 text-xl">Hold tight, magic is happening...</h2>
    </div>
  );
};

export default LoadingScreen;
