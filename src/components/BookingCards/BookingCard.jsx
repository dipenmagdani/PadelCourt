import React from "react";

export const BookingCard = () => {
  return (
    <div className="bg-white w-full h-[600px] flex flex-col justify-between">
      <div className="heading flex flex-col items-center justify-center">
        <h1 className="font-antonio text-[#FFDF2A] text-[70px]">HOW TO</h1>
        <span className="font-druk text-[20px]">book your court</span>
      </div>
      <div className="image-play flex justify-between ">
        <div className="pb-11">
          <img
            src="./assets/images/book_1.jpg"
            alt="book_1"
            className="w-[350px] h-[400px] ml-20 rounded-3xl hover:opacity-55 cursor-pointer "
          />
        </div>
        <div className="download bg-[#FFE96F] w-[350px] h-[500px] rounded-[48px] flex flex-col -my-20  mx-10">
          <div className="flex text-center flex-col my-20">
            <h1 className="font-druk text-[23px] ">download our app</h1>
            <span className="font-teachers text-sm">
              For faster bookings & real-time schedule
            </span>
          </div>
          <div className="download-links flex flex-col items-center gap-4 ">
            <img
              src="./assets/images/googleplay.png"
              alt="google_play"
              className="w-2/3 cursor-pointer hover:opacity-85"
            />
            <img
              src="./assets/images/appstore.png"
              alt="google_play"
              className="w-2/3 cursor-pointer hover:opacity-85"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
