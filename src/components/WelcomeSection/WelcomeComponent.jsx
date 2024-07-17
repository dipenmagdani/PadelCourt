import React from "react";

const WelcomeComponent = () => {
  return (
    <div className="w-full h-[700px] bg-black border border-white flex items-center">
      <div className="flex mx-20">
        <div className="ml-20 mt-20 z-50 aspect-square">
          <img
            src="./assets/images/welcome_1.jpg"
            alt="welcome 1"
            className=" h-[450px] w-[400px] -rotate-6"
          />
        </div>
        <div className="relative top-20 aspect-square">
          <img
            src="./assets/images/welcome_2.jpg"
            alt="welcome 2"
            className="w-[
          400px] h-[450px] rotate-6"
          />
        </div>
        <div className="welcome-section bg-white w-[350px] h-[550px] rounded-[48px] flex flex-col justify-evenly z-40">
          <div className="flex relative text-center ">
            <h1 className="font-antonio text-[60px] text-pretty">
              WELCOME TO <span className="text-[#FFDF2A]">MILO'S</span> PADEL
            </h1>
          </div>
          <p className="text-justify pl-3 pr-3 ml-5 text-balance font-teachers">
            We are thrilled to bring one of the world’s fastest-growing sports
            to Bali. Whether you are an experienced Padel player or playing for
            the first time, we look forward to welcoming you to Milo’s Padel –
            Bali’s No.1 Padel Club.
          </p>
          <button className=" text-sm hover:bg-opacity-80 flex justify-center items-center ml-7 bg-[#FFE96F] w-[120px] h-[40px] font-teachers font-bold rounded-[61px]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
