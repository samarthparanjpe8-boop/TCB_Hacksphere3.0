import React from 'react';

const Timeline = ({ id }) => {
  const events = [
    { time: "8:00 AM", title: "REGISTRATION", desc: "Suspects arrive. Fingerprints taken.", stamp: "PENDING", bounty: "$5,000", side: "left" },
    { time: "9:00 AM", title: "HACKATHON STARTS", desc: "The job begins. Don't trigger the alarms.", stamp: "WANTED", bounty: "$50,000", side: "right" },
    { time: "1:00 PM", title: "LUNCH BREAK", desc: "Regroup at the safehouse.", stamp: "CLEARED", bounty: "$500", side: "left" },
    { time: "3:30 PM", title: "MENTOR SESSION", desc: "Meeting with the kingpins. Fix the code.", stamp: "WANTED", bounty: "$100,000", side: "right" },
    { time: "6:30 PM", title: "HACKATHON ENDS", desc: "Drop the weapons. Hands in the air.", stamp: "MISSION PASSED", bounty: "MAXIMUM", side: "left" },
  ];

  return (
    <section id={id} className="wavy-timeline-section">
      <p className="section-label align-center reveal">/ V.C.P.D. DATABASE</p>
      <h2 className="section-title align-center text-white reveal">THE WANTED TIMELINE</h2>

      <div className="wavy-board">
        {/* Wavy SVG path running through the middle */}
        <div className="wavy-thread-container">
          <svg className="wavy-svg-path" viewBox="0 0 100 1000" preserveAspectRatio="none">
            <line
              x1="50" y1="0" x2="50" y2="1000"
              stroke="#ffffff"
              strokeWidth="4"
              strokeDasharray="10 10"
            />
          </svg>
        </div>

        <div className="wavy-timeline-content">
          {events.map((evt, index) => (
            <div key={index} className={`wavy-row ${evt.side} reveal`}>

              <div className="wavy-poster-wrapper">
                {/* Connector point on the wavy line */}
                <div className="wavy-dot glow-gold"></div>

                {/* The Wanted Poster itself */}
                <div className="wanted-poster" style={{ transform: `rotate(${index % 2 === 0 ? '-3deg' : '4deg'})` }}>
                  <div className="poster-header">
                    <span className="poster-bounty">{evt.bounty}</span>
                    <span className="poster-time">{evt.time}</span>
                  </div>

                  <div className="poster-body">
                    <div className="poster-mugshot">
                      <div className="mugshot-placeholder">NO PHOTO</div>
                      <div className={`poster-stamp ${evt.stamp.toLowerCase()}`}>{evt.stamp}</div>
                    </div>

                    <div className="poster-details">
                      <h3 className="poster-title">{evt.title}</h3>
                      <p className="poster-desc">{evt.desc}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
