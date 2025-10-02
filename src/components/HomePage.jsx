import React from "react";
import heroBg from "../assets/herobg.jpg";

const HomePage = () => {
  const redirectToSite = () => {
    window.open("https://www.brington.in/", "_blank");
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <img
          src={heroBg}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />
      </div>

      {/* Header */}
      <header
        style={{
          position: "relative",
          zIndex: 10,
          width: "90%", // wider header
          maxWidth: "1200px",
          backgroundColor: "#ff8c00",
          padding: "0.75rem 2rem",
          margin: "2rem auto 0 auto",
          borderRadius: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <button
          onClick={redirectToSite}
          style={{
            background: "transparent",
            color: "#fff",
            fontSize: "1.25rem",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            transition: "text-decoration 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          Home
        </button>
      </header>

      {/* Content */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "calc(100vh - 128px)",
          maxWidth: "60rem",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "6rem", // bigger hero text
            fontWeight: "bold",
            color: "#fff",
            lineHeight: "1.1",
            marginBottom: "1rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          I am a Sample
          <br />
          Website
        </h1>
        <p
          style={{
            fontSize: "2rem", // smaller subtext
            color: "#fff",
            lineHeight: "1.5",
            marginBottom: "3rem",
            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          I'm a Sample Website, Create me exactly as I am. <br />
          Don't Do any Mistakes.
        </p>
        <button
          onClick={redirectToSite}
          style={{
            backgroundColor: "#dc66e4ff",
            color: "#000000ff",
            padding: "1.5rem 4rem", // bigger button
            borderRadius: "2rem",
            fontSize: "1.75rem", // bigger font
            fontWeight: "700",
            cursor: "pointer",
            border: "none",
            boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#3abd80ff";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#da6de2ff";
            e.target.style.transform = "scale(1)";
          }}
        >
          Get Started
        </button>
      </main>
    </div>
  );
};

export default HomePage;
