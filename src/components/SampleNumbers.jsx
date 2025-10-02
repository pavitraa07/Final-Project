import React, { useState, useEffect } from "react";

const SampleNumbers = () => {
  // Generate numbers once
  const [rows] = useState([
    {
      id: 1,
      label: "Row No.1",
      values: [
        ...Array.from({ length: 20 }, () => Math.floor(Math.random() * 150) + 50),
        122, 144, 67, 56, 34, 12, 67, 98, -98, 78
      ],
    },
    {
      id: 2,
      label: "Row No.2",
      values: [
        ...Array.from({ length: 20 }, () => Math.floor(Math.random() * 150) + 50),
        122, 144, 67, 56, 34, 12, 67, 98, -98, 78
      ],
    },
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Horizontal movement based on scrollPosition, speed stays same
  const calculateTransform = (rowId) => {
    const speed = rowId === 1 ? 0.5 : -0.5; 
    return `translateX(${scrollPosition * speed}px)`;
  };

  const calculateBackground = () => {
    const baseColor = "rgb(255, 250, 240)";
    const maxOpacity = 0.3;
    const opacity = Math.min(maxOpacity, scrollPosition / 1000);

    return `
      linear-gradient(
        to bottom,
        rgba(128,0,0,${opacity}) 0%,
        rgba(128,0,0,${opacity * 0.6}) 30%,
        rgba(128,0,0,${opacity * 0.3}) 60%,
        rgba(128,0,0,0) 100%
      ),
      ${baseColor}
    `;
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "4rem 2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: calculateBackground(),
        transition: "background 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "5rem" }}>
        {rows.map((row) => (
          <div key={row.id}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#555",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              Sample Numbers
            </h3>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#000",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              {row.label}
            </h2>

            <div style={{ overflow: "hidden", width: "100%" }}>
              {/* Make the container width depend on number of boxes so all can scroll */}
              <div
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  width: `${row.values.length * 350 + (row.values.length - 1) * 40}px`, // dynamic width
                  transform: calculateTransform(row.id),
                  transition: "transform 0.1s linear",
                  willChange: "transform",
                }}
              >
                {row.values.map((value, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: "350px",
                      height: "150px",
                      backgroundColor: "#fff",
                      borderRadius: "2.5rem",
                      padding: "1.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                      fontWeight: "700",
                      color: "#000",
                      fontSize: "4rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ fontSize: "4rem", lineHeight: 1 }}>
                      {value > 0 ? `${value}` : value}
                    </span>
                    <span style={{ fontSize: "2rem", alignSelf: "flex-start" }}>Unit</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleNumbers;
