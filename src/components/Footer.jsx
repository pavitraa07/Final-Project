import React, { useState } from "react";
import mainLogo from "../assets/main.svg"; // your main logo image
import signature from "../assets/signature.svg"; // your signature image

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        padding: "64px 0 16px 0",
        marginTop: 40,
        fontFamily: "inherit",
        fontWeight: 400,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "auto", padding: "0 40px" }}>
        <h2 style={{ fontSize: 64, fontWeight: 700, margin: 0, lineHeight: 1.05 }}>
          Be the First to Receive the<br />
          Latest News
        </h2>
        <div style={{ marginTop: 48 }}>
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              background: hovered ? "#fff" : "none",
              color: hovered ? "#000" : "#fff",
              border: "1.5px solid #fff",
              borderRadius: 32,
              fontSize: 22,
              padding: "12px 60px",
              cursor: "pointer",
              fontWeight: 500,
              transition: "background 0.3s, color 0.3s",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Sign Up {hovered ? "↑" : "→"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 70,
            flexWrap: "wrap",
          }}
        >
          <div style={{
            minWidth: 150,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12
          }}>
            <img
              src={mainLogo}
              alt="Brington logo"
              style={{ width: 44, filter: "invert(1)" }}
            />
            <span style={{ fontSize: 22, fontWeight: 600 }}>Brington</span>
          </div>
          <div style={{ minWidth: 150 }}>
            <span style={{ fontWeight: 700 }}>Navigation</span>
            <div style={{ marginTop: 12, lineHeight: "2" }}>
              <span style={{ color: "#fff", fontSize: 17, cursor: "default" }}>Home</span><br />
              <span style={{ color: "#fff", fontSize: 17, cursor: "default" }}>About</span><br />
              <span style={{ color: "#fff", fontSize: 17, cursor: "default" }}>Contact</span>
            </div>
          </div>
          <div style={{ minWidth: 150 }}>
            <span style={{ fontWeight: 700 }}>Social</span>
            <div style={{ marginTop: 12, lineHeight: "2" }}>
              <a href="https://facebook.com" style={{ color: "#fff", textDecoration: "none", fontSize: 17 }}>
                Facebook
              </a><br />
              <a href="https://instagram.com" style={{ color: "#fff", textDecoration: "none", fontSize: 17 }}>
                Instagram
              </a><br />
              <a href="https://youtube.com" style={{ color: "#fff", textDecoration: "none", fontSize: 17 }}>
                Youtube
              </a>
            </div>
          </div>
          <div style={{ minWidth: 150 }}>
            <span style={{ fontWeight: 700 }}>Contact</span>
            <div style={{ marginTop: 12, lineHeight: "2" }}>
              <span style={{ fontSize: 17 }}>info@mysite.com</span><br />
              <span style={{ fontSize: 17 }}>Tel. 123-456-7890</span><br />
              <span style={{ fontSize: 17 }}>India</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #fff",
            marginTop: 50,
            paddingTop: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            color: "#fff",
            fontSize: 15,
          }}
        >
          <span>&copy; 2035 by Brington Inc</span>
          <span>
            Built with love and caffeine by
            <img
              src={signature}
              alt="signature"
              style={{ height: 24, verticalAlign: "middle", marginLeft: 9, filter: "invert(1)" }}
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;