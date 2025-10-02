import React, { useState, useEffect, useRef } from 'react';

const SampleThings = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);
  const pathRef = useRef(null); // path reference for drawing animation

  const dataSequence = [
    { number: "1,034", text: "Sample Data about Sample Things" },
    { number: "2", text: "Sample Data about Sample Things" },
    { number: "54", text: "Sample Data about Sample Things" },
    { number: "25", text: "Sample Data about Sample Things" },
    { number: "88", text: "Sample Data about Sample Things" },
    { number: "129", text: "Sample Data about Sample Things" },
    { number: "333", text: "Sample Data about Sample Things" },
    { number: "777", text: "Sample Data about Sample Things" },
    { number: "999", text: "Sample Data about Sample Things" }
  ];

  const getPosition = (index, total) => {
    const t = total > 1 ? index / (total - 1) : 0;
    const y = 10 + t * 280;
    const x = index % 2 === 0 ? 30 : 70;
    return { x, y };
  };

  useEffect(() => {
    // Intersection observer to reveal items
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const idx = parseInt(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems(prev => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    const elements = itemRefs.current;
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Handle scroll to draw path progressively
  useEffect(() => {
    const handleScroll = () => {
      const path = pathRef.current;
      if (!path) return;

      const totalLength = path.getTotalLength();
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight - windowHeight;
      const scrollProgress = Math.min(scrollTop / docHeight, 1);

      const drawLength = totalLength * scrollProgress;
      path.style.strokeDashoffset = totalLength - drawLength;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
    background: 'linear-gradient(135deg, #0a3d2e 0%, #e7e7e7 50%, #a274f2 100%)',
    position: 'relative',
    width: '100%',
    minHeight: '300vh',
    overflowX: 'hidden',
    transition: 'background 0.5s ease'
  };

  // Build path string connecting all points
  const pathD = dataSequence
    .map((_, i) => {
      const pos = getPosition(i, dataSequence.length);
      return `${i === 0 ? 'M' : 'L'} ${pos.x}% ${pos.y}vh`;
    })
    .join(' ');

  return (
    <div style={backgroundStyle}>
      {/* SVG Full Path Behind Elements */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '300vh',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <path
          ref={pathRef}
          d={pathD}
          style={{
            fill: 'none',
            stroke: '#fff',
            strokeWidth: 3,
            strokeDasharray: 6,
            strokeDashoffset: 0,
            transition: 'stroke-dashoffset 0.2s linear'
          }}
        />
      </svg>

      {/* Dots */}
      {visibleItems.map(i => {
        const pos = getPosition(i, dataSequence.length);
        return (
          <div
            key={`dot-${i}`}
            style={{
              position: 'absolute',
              left: `${pos.x}%`,
              top: `${pos.y}vh`,
              width: 14,
              height: 14,
              background: '#fff',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 1,
              animation: 'dotFadeIn 0.7s forwards',
              zIndex: 2
            }}
          ></div>
        );
      })}

      {/* Content Items */}
      {dataSequence.map((item, idx) => {
        const isVisible = visibleItems.includes(idx);
        const pos = getPosition(idx, dataSequence.length);
        const translateX = idx % 2 === 0 ? '-50px' : '50px';
        return (
          <div
            key={idx}
            ref={el => (itemRefs.current[idx] = el)}
            data-index={idx}
            style={{
              position: 'absolute',
              left: `${pos.x}%`,
              top: `${pos.y}vh`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : `translateX(${translateX})`,
              transition: 'all 0.8s ease',
              padding: 20,
              zIndex: 3
            }}
          >
            {/* Rotating Star */}
            <div
              style={{
                position: 'absolute',
                top: -70,
                width: 60,
                height: 60,
                background: 'purple',
                clipPath:
                  'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                animation: 'rotateStar 5s linear infinite'
              }}
            ></div>

            {/* Number */}
            <h1
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 120,
                fontWeight: '900',
                color: '#fff',
                margin: 0,
                padding: 10,
                textShadow: '0 0 10px rgba(0,0,0,0.6)'
              }}
            >
              {item.number}
            </h1>

            {/* Text */}
            <p
              style={{
                fontSize: 20,
                color: '#f5f5f5',
                marginTop: 12,
                textAlign: 'center',
                maxWidth: 260,
                padding: 8
              }}
            >
              {item.text}
            </p>
          </div>
        );
      })}

      <style>{`
        @keyframes dotFadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes rotateStar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SampleThings;
