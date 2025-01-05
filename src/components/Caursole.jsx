import React, { useState } from "react";
import img1 from "/cs1.jpg";
import img2 from "/cs2.jpg";
import img3 from "/cd3.jpg";
import img4 from "/cd4.jpg";

const ImageCarousel = () => {
  // Images for the carousel
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        margin: 0,
        padding: 0,
        overflow: "hidden", // Prevent scrollbars
      }}
    >
      <div style={{ position: "relative", width: "90%", maxWidth: "800px" }}>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain", // Prevent image cropping
              borderRadius: "8px",
            }}
          />
        </div>
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "#0000003f",
            border: "none",
            padding: "10px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          &#8249;
        </button>
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "#0000003f",
            border: "none",
            padding: "10px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          &#8250;
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              margin: "0 5px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#000" : "#ccc",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
