import React from "react";

function Hero() {
  return (
    <div className="hero-section w-full h-fit flex flex-col items-center justify-center">
      <img
        src="./assets/images/hero_image.jpg"
        alt=""
        className="bg-cover h-screen w-lvw opacity-20"
      />
      <div className="absolute flex justify-center gap-4">
        <h1 className="text-white text-5xl font-druk ">
          First <span className="text-[#FFDF2A]">Padel Club</span> in Indonesia
        </h1>
        <button className="font-teachers w-[200px] h-[50px] rounded-[40px] text-[15px] font-bold bg-[#FFE96F] absolute top-20 hover:bg-opacity-70">
          BOOK YOUR COURT
        </button>
      </div>
    </div>
  );
}

export default Hero;
