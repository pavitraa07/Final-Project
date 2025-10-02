import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HarryWilliams from "../assets/Harry Williams.jpg";
import VeronikaZakharova from "../assets/Veronika Zakharova.jpg";
import LissaCross from "../assets/Lissa Cross.jpg";
import SheldonSmith from "../assets/Sheldon Smith.jpg";
import AkiraLee from "../assets/Akira Lee.jpg";
import AnnJacobs from "../assets/Ann Jacobs.jpg";
import MurtyYang from "../assets/Murty Yang.jpg";
import JasonGuhl from "../assets/Jason Guhl.jpg";

const speakers = [
  { name: "Harry Williams", image: HarryWilliams },
  { name: "Veronika Zakharova", image: VeronikaZakharova },
  { name: "Lissa Cross", image: LissaCross },
  { name: "Sheldon Smith", image: SheldonSmith },
  { name: "Akira Lee", image: AkiraLee },
  { name: "Ann Jacobs", image: AnnJacobs },
  { name: "Murty Yang", image: MurtyYang },
  { name: "Jason Guhl", image: JasonGuhl },
];

const Speakers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h1 style={{ textAlign: "center", fontSize: 56, fontWeight: "bold" }}>
        Speakers
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        {speakers.map((speaker, index) => (
          <div
            key={speaker.name}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            style={{
              width: "48%",
              display: "flex",
              alignItems: "center",
              marginBottom: 30,
              borderBottom: "1px solid #dcdcdc",
              paddingBottom: 30, // increased padding for clearer line separation
            }}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              style={{
                width: 100,
                height: 100,
                borderRadius: 12,
                objectFit: "cover",
                marginRight: 25,
              }}
            />
            <div
              style={{
                flexGrow: 1,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 5,
                }}
              >
                {speaker.name}
              </div>
              <div style={{ color: "#b3b3b3", fontSize: 16, fontWeight: 400 }}>
                Director of Mobile Gaming, Fixer
              </div>
            </div>
            <a
              href="https://www.linkedin.com/company/wix-com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 28px",
                borderRadius: 25,
                border: "1.5px solid #333",
                fontSize: 16,
                color: "#333",
                textDecoration: "none",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;