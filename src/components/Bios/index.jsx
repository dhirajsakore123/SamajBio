import React from "react";
import BioVideo from "/Bio.mp4";

const Bios = () => {
  return (
    <div className=" relative grid grid-cols-1 ">
      {/* <div>
        <h2>Samaj Bio</h2>
        <p>
          Samaj Bio is a non-profit organization committed to promoting
          spiritual growth, self-awareness, and community building in the spirit
          of the Hindu philosophy.
        </p>
        <p>
          Our mission is to help individuals and communities reach their full
          potential, fostering a sense of belonging and self-compassion.
        </p>
        <p>
          We are committed to supporting the well-being and spiritual growth of
          our members, as well as providing resources and guidance to help them
          navigate the complexities of life.
        </p>
      </div> */}

      <div className="relative bg-red-200 h-[110vh]">
        <video
          // ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-contain"
          // onClick={togglePlayPause}
          // onPause={() => setIsPaused(true)}
          // onPlay={() => setIsPaused(false)}
          autoPlay
          muted
        
        >
          <source src={BioVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Bios;
