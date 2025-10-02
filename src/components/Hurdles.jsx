import React from "react";
import hurdlesImage from "../assets/hurdles2.png";

const HurdlesPage = () => {
  // Reusable row (duplicated to create a seamless marquee)
  const Row = ({ prefix }) => (
    <ul className="tape__track" aria-hidden={prefix === "B"}>
      {Array.from({ length: 10 }).map((_, i) => (
        <li className="tape__item" key={`${prefix}-${i}`}>
          <img src={hurdlesImage} alt="" className="hurdle-svg" />
          <span className="tape__text">HURDLES</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="hurdles-container">
      {/* HURDLES marquee band only */}
      <section className="hurdles-tape" aria-label="Hurdles marquee">
        <div className="tape" data-variant="light">
          <Row prefix="A" />
          <Row prefix="B" />
        </div>
      </section>

      {/* Inline styles */}
      <style>{`
        .hurdles-tape {
          background: #ffffff;
          padding-block: 12px;
          width: 100%;
        }

        .tape {
          --gap: 2.0rem;
          --speed: 28s;
          width: 100%;
          max-width: none;
          margin: 0;
          overflow: hidden;
          display: flex;
          gap: var(--gap);
          align-items: center;
          border-radius: 0;
          padding: 8px 0;
        }

        .tape__track {
          display: flex;
          flex-shrink: 0;
          min-width: 100%;
          gap: var(--gap);
          align-items: center;
          animation: tape-scroll var(--speed) linear infinite;
        }

        .tape__item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #11b5a4;
          font-weight: 600;
          letter-spacing: 0.04em;
          font-size: clamp(18px, 3.6vw, 40px);
        }

        .hurdle-svg {
          width: clamp(18px, 3vw, 34px);
          height: clamp(18px, 3vw, 34px);
          object-fit: contain;
          background-color: #11b5a4;
          border-radius: 50%;
          padding: 6px;
        }

        @keyframes tape-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% - var(--gap))); }
        }

        @media (prefers-reduced-motion: reduce) {
          .tape__track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HurdlesPage;
