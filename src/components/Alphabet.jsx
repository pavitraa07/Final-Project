import React, { useState, useRef, useEffect } from "react";
import avideo from "../assets/avideo.mp4";
import bvideo from "../assets/bvideo.mp4";
import cvideo from "../assets/cvideo.mp4";
import dvideo from "../assets/dvideo.mp4";
import evideo from "../assets/evideo.mp4";
import fvideo from "../assets/fvideo.mp4";

import alphafoot from "../assets/alphafoot.jpg";
import gridfoot from "../assets/gridfoot.jpg";

const Alphabet = () => {
  const [activeLetter, setActiveLetter] = useState("A");
  const videoRef = useRef(null);

  const videos = {
    A: avideo,
    B: bvideo,
    C: cvideo,
    D: dvideo,
    E: evideo,
    F: fvideo,
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  }, [activeLetter]);

  const containerStyle = {
    display: "flex",
    width: "100vw",
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const leftStyle = {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000",
  };

  const rightStyle = {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000",
  };

  const videoStyle = {
    width: "100%",
    height: "70%", // video height
    objectFit: "cover",
  };

  const imageStyle = {
    width: "100%",
    height: "30%", // footer image height
    objectFit: "cover",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    backgroundColor: "#000",
    border: "1px solid #fff",
    height: "calc(100% - 60px)", // fixed height minus footer image
    minHeight: "300px", // ensures it never collapses
  };

  const cellStyle = {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "48px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid #fff",
    overflow: "hidden", // ensures scale doesn't expand grid
  };

  const handleMouseEnter = (letter) => {
    setActiveLetter(letter);
  };

  return (
    <div style={containerStyle}>
      {/* Left Side: Video + Footer Image */}
      <div style={leftStyle}>
        <video
          ref={videoRef}
          key={activeLetter}
          src={videos[activeLetter]}
          autoPlay
          muted
          loop
          style={videoStyle}
        />
        <img src={alphafoot} alt="Alpha Footer" style={imageStyle} />
      </div>

      {/* Right Side: Grid + Footer Image */}
      <div style={rightStyle}>
        <div style={gridStyle}>
          {Object.keys(videos).map((letter) => {
            const isActive = activeLetter === letter;
            return (
              <div
                key={letter}
                style={{
                  ...cellStyle,
                  ...(isActive && {
                    backgroundColor: "#fff",
                    color: "#000",
                  }),
                }}
                onMouseEnter={() => handleMouseEnter(letter)}
              >
                <span
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {letter}
                </span>
              </div>
            );
          })}
        </div>
        <img src={gridfoot} alt="Grid Footer" style={imageStyle} />
      </div>
    </div>
  );
};

export default Alphabet;
