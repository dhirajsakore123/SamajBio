import React, { useRef, useState } from "react";
import logo from "/logo.png";
import logo1 from "/logo1.png";
import logo2 from "/logo2.png";
import HomeVideo from "/HomeVideo.mp4";
import PlayBackImg from "/PlayBackImg1.jpg";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";

const HomeCompo = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPaused, setIsPaused] = useState(true); // Track play/pause state

  // Toggle video play/pause state
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused); // Update the state
    }
  };

  return (
    <div className=" relative lg:h-screen   bg-gradient-to-tr from-orange-300 to-yellow-100">
      <nav className=" w-full h-16 shadow-md bg-white px-5 md:px-10  "></nav>
      <div className=" h-fit  lg:h-[90.85vh] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
        
        <div className=" text-black px-5 flex flex-col justify-center items-center gap-5 py-5 ">
          <div className="  w-full flex justify-between md:justify-around">
            <img src={logo} alt="not found" className=" w-32 h-32 " />
            <img src={logo2} alt="not found" className=" h-32 " />
          </div>
          <div className="text-black px-5 flex flex-col justify-center items-center gap-2 md:gap-5 ">
            <h1 className=" text-6xl md:text-[5rem] tiro-devanagari-marathi-regular  m-0 p-0  ">
              राज्यस्तरिय
            </h1>
            <p className=" text-4xl  md:text-[4rem] tiro-devanagari-marathi-regular">
              खैरे कुणबि विवाह मंच
            </p>
            <p className=" text-3xl  md:text-[3rem] tiro-devanagari-marathi-regular">
              महाराष्ट्र राज्य
            </p>
            <p className="  md:text-[2rem] tiro-devanagari-marathi-regular">
              {" "}
              स्थापना 2019
            </p>
          </div>
          <div className="  w-full flex justify-center">
            <img src={logo1} alt="not found" className=" h-32 " />
            {/* <img src={logo2} alt="not found" className=" h-32 " /> */}
          </div>
        </div>

        <div className="relative bg-red-200">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            onClick={togglePlayPause}
            onPause={() => setIsPaused(true)}
            onPlay={() => setIsPaused(false)}
            muted
            controls
          >
            <source src={HomeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Image when Paused */}
          {isPaused && (
            <img
              src={PlayBackImg}
              alt="Paused Overlay"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          )}

          {/* Play/Pause Button in the Center */}
          <button
            onClick={togglePlayPause}
            className="absolute text-white top-[45%] left-[44%] grid place-content-center  bg-black/60 rounded-full z-10"
            style={{ width: "60px", height: "60px" }}
          >
            {isPaused ? <FaPlay size={28} /> : <FaPause size={28} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCompo;
