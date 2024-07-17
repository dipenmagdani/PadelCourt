import React from "react";

const Community = () => {
  const buttonData = [
    {
      text: "PERERENAN",
    },
    {
      text: "CANGGU",
    },
    {
      text: "UBUD",
    },
    {
      text: "KEROBOKAN",
    },
    {
      text: "SESEH",
    },
    {
      text: "KEDUNGU",
    },
  ];
  return (
    <div className="w-full h-[700px] bg-[#EFEFEF] flex flex-col justify-between">
      <div className="flex justify-between  h-[600px]">
        <div className="experience flex flex-col justify-center items-center w-[500px]  h-[600px]">
          <img
            src="./assets/images/community_1.jpg"
            alt="community_1"
            className="w-[300px] ml-20 pt-2"
          />
          <div className="font-teachers flex flex-col items-center mt-2 ml-11">
            <h1 className="font-bold text-3xl">"FANTASTIC EXPERIENCE!"</h1>
            <span className="text-[#FFDF2A] font-bold text-2xl">-ALEX</span>
          </div>
        </div>
        <div>
          <img
            src="./assets/images/community_2.png"
            alt="community_2"
            className="w-[350px] mx-10 my-52"
          />
        </div>
        <div className="welcome-section  w-[550px] h-[550px] rounded-[48px] flex flex-col justify-evenly z-40 mt-10">
          <div className="flex items-center justify-center text-center">
            <h1 className="font-antonio text-[60px] ">
              JOIN OUR <br />
              <span className="text-[#FFDF2A]">COMMUNITY</span>
            </h1>
          </div>
          <p className="text-justify pl-3 pr-3 ml-5 text-balance font-teachers">
            Become a part of the Milo’s Padel community and enhance your Padel
            journey surrounded by the beauty of Bali. <br />
            <br />
            Connect with fellow enthusiasts, from beginners to seasoned players,
            sharing a common love for this thrilling sport. As a member, you’ll
            enjoy exclusive access to events, tournaments,and social gatherings
            to make new connections. <br />
            <br />
            Select a community below and be part of something extraordinary!
            <br />
            1. Download our app <br />
            2.Create a match <br />
            3. Find a match partner
          </p>
        </div>
      </div>
      <div className="button mt-auto mb-8 flex items-center justify-center">
        {buttonData.map((item, index) => (
          <button
            className="text-sm hover:bg-opacity-50 flex justify-center items-center ml-7 bg-[#FFE96F] w-[120px] h-[40px] font-teachers font-bold rounded-[61px]"
            key={index}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Community;
