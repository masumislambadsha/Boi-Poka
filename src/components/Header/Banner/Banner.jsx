import React from "react";
import bannerImg from "../../../assets/hero-img.png";

const Banner = () => {
  return (
    <div className="flex place-content-evenly items-center">
      <div>
        <h2
          className="font-serif font-bold mb-[49px] text-6xl w-[650px] leading-[1.5] "
        >
          Books to freshen up your bookshelf
        </h2>
        <a className="btn bg-[#23BE0A] rounded-lg px-[30px] py-[30px] text-white text-lg">
         View The List
        </a>
      </div>
      <div>
        <img src={bannerImg} className="w-[318px]" alt="" />
      </div>
    </div>
  );
};

export default Banner;
