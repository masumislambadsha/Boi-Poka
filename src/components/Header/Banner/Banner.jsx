import React from "react";
import bannerImg from "../../../assets/hero-img.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="space-y-6 md:block flex flex-col justify-center items-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-tight max-w-2xl md:text-start text-center">
            Books to freshen up your bookshelf
          </h2>
          <a className="btn bg-[#23BE0A] rounded-lg px-6 py-3 text-white text-base md:text-lg w-max">
            View The List
          </a>
        </div>
        <div className="flex md:justify-end justify-center">
          <img src={bannerImg} className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[480px] h-auto" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
