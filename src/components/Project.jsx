import React, { useState } from 'react';
import projectVideo from '../assets/project.mp4';

const Project = () => {
  const [open, setOpen] = useState(false);

  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

  return (
    <section style={styles.projectHero}>
      {/* Left copy */}
      <div style={styles.heroContent}>
        <h1 style={styles.projectTitle}>Project Name</h1>
        <p style={styles.clientName}>Client Name</p>
      </div>

      {/* Big right video */}
      <video
        src={projectVideo}
        style={styles.heroVideo}
        autoPlay
        muted
        loop
      />

      {/* Floating action button */}
      {!open ? (
        <button
          style={styles.projectFab}
          aria-label="Open details"
          onClick={() => setOpen(true)}
        >
          +
        </button>
      ) : (
        <button
          style={{ ...styles.projectFab, ...styles.projectFabClose }}
          aria-label="Close details"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      )}

      {/* Frosted details overlay */}
      {open && (
        <div
          style={styles.projectOverlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            style={styles.projectGlassCard}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.projectCardMedia}>
              <video
                src={projectVideo}
                style={styles.projectCardVideo}
                autoPlay
                muted
                loop
              />
            </div>

            <div style={styles.projectCardCopy}>
              <p>
                Share information on a previous project here to attract new
                clients. To help visitors understand the context and background
                of the work, provide a brief summary. Include the project's time
                frame and scope, as well as its goals and outcome.
              </p>
              <p>
                Add details about why this project was created and what makes it
                significant. Explain how the business handled challenges and
                overcame obstacles to make this undertaking a success. Consider
                adding images or videos to showcase the project and engage
                viewers.
              </p>
              <button
                style={styles.projectLearnButton}
                onClick={handleLearnMore}
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;

const styles = {
  projectHero: {
    position: 'relative',
    minHeight: '88vh',
    background: '#2f5b61',
    overflow: 'hidden',
    padding: '48px 24px',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '500px',
    textAlign: 'left',
  },
  projectTitle: {
    margin: '0 0 4px 0',
    fontSize: 'clamp(28px, 10vw, 45px)',
    lineHeight: 1.2,
    color: '#fff',
    fontWeight: 300,
  },
  clientName: {
    margin: 0,
    fontSize: 'clamp(18px, 2vw, 20px)',
    color: '#ddf7f2',
    opacity: 0.9,
    fontWeight: 300,
  },
  heroVideo: {
    position: 'absolute',
    top: 0,
    right: '0',        // keep on right
    height: '100%',
    width: 'min(1100px, 65vw)', // slightly larger width moves it a bit left
    objectFit: 'cover',
    borderTopLeftRadius: '28px',
    borderBottomLeftRadius: '28px',
    pointerEvents: 'none',
  },
  projectFab: {
    position: 'absolute',
    top: '40px',
    right: '40px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.35)',
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(8px) saturate(160%)',
    color: '#fff',
    fontSize: '32px',
    lineHeight: 1,
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    zIndex: 30,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
  },
  projectFabClose: {
    fontSize: '36px',
  },
  projectOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.2)',
    display: 'grid',
    placeItems: 'center',
    zIndex: 20,
  },
  projectGlassCard: {
    width: 'min(92vw, 1160px)',
    background: 'rgba(255,255,255,0.18)',
    border: '1px solid rgba(255,255,255,0.35)',
    borderRadius: '28px',
    padding: 'clamp(16px, 3vw, 38px)',
    display: 'grid',
    gridTemplateColumns: 'minmax(260px, 420px) 1fr',
    gap: 'clamp(16px, 3vw, 32px)',
    backdropFilter: 'blur(22px) saturate(160%)',
  },
  projectCardMedia: {
    display: 'grid',
    placeItems: 'center',
  },
  projectCardVideo: {
    width: '100%',
    aspectRatio: '1 / 1',
    borderRadius: '16px',
    objectFit: 'cover',
  },
  projectCardCopy: {
    color: '#0c1e24',
    fontSize: 'clamp(14px, 1.2vw, 16px)',
    lineHeight: 1.65,
    background: 'linear-gradient(90deg, rgba(255,255,255,0.0), rgba(255,255,255,0.15))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  },
  projectLearnButton: {
    display: 'inline-block',
    marginTop: '8px',
    color: '#0b2530',
    textDecoration: 'none',
    fontWeight: 700,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    textAlign: 'left',
    position: 'relative',
    transition: 'all 0.2s ease',
  },
};
