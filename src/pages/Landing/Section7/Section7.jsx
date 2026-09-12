import React, { useState } from 'react';
import bg2Img from '@/assets/images/bg2.png';
import './Section7.css';

const FAQ_DATA = [
  {
    number: "01",
    question: "WHAT IS OMNITRIX?",
    answer: "OMNITRIX IS A COMPETITIVE ENGINEERING BATTLEFIELD WHERE TEAMS DEPLOY CUSTOM-BUILT MACHINES AND COMPETE THROUGH STRATEGY, CONTROL AND RAW MECHANICAL POWER."
  },
  {
    number: "02",
    question: "WHO CAN PARTICIPATE?",
    answer: "STUDENTS, ENGINEERS, MAKERS AND ROBOTICS ENTHUSIASTS CAN PARTICIPATE SUBJECT TO THE RULES OF THE EVENT."
  },
  {
    number: "03",
    question: "DO I NEED A TEAM TO PARTICIPATE?",
    answer: "TEAM REQUIREMENTS DEPEND ON THE EVENT CATEGORY. CHECK THE EVENT-SPECIFIC RULEBOOK BEFORE DEPLOYMENT."
  },
  {
    number: "04",
    question: "WHAT TYPES OF ROBOTS ARE ALLOWED?",
    answer: "EACH EVENT CATEGORY HAS ITS OWN TECHNICAL REQUIREMENTS, WEIGHT LIMITS AND SAFETY PROTOCOLS.REFER ROBOTICS SECTION IN EVENTS PAGE AND/OR BROCHURE PAGE."
  },
  {
    number: "05",
    question: "WHERE WILL THE EVENT TAKE PLACE?",
    answer: "THE OFFICIAL VENUE OF THE EVENT IS INSTITUTE OF ENGINEERING AND MANAGEMENT,GURUKUL CAMPUS.FOR REPORTING INFO. CONTACT US."
  },
  {
    number: "06",
    question: "WHAT ARE THE RULES FOR REGISTRATION AND PARTICIPATION IN ESPORTS EVENTS?",
    answer: "REFER ESPORTS PAGE FROM EVENTS SECTION AND BROCHURE PAGE."
  },
  {
    number: "07",
    question: "CAN I PARTICIPATE IN MULTIPLE EVENTS?",
    answer: "YES YOU CAN PARTICIPATE IN MULTIPLE EVENTS. CHECK FOR TIMING CONFLICTS BEFORE REGISTERING."
  },
  {
    number: "08",
    question: "WHERE CAN I FIND THE COMPLETE RULEBOOK?",
    answer: "THE COMPLETE EVENT RULEBOOK AND TECHNICAL SPECIFICATIONS WILL BE AVAILABLE IN THE EVENTS SECTION AND BROCHURE SECTION."
  }
];

export default function Section7() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="robowars-faq-section" id="faq-section">
      {/* Background Image Layer */}
      <div className="faq-background" aria-hidden="true">
        <img src={bg2Img} alt="Tactical Background" className="faq-bg-img" />
      </div>

      {/* Dark Vignette & Atmospheric Overlay */}
      <div className="faq-overlay-dark" aria-hidden="true"></div>

      {/* Main FAQ Content Container */}
      <div className="faq-container">
        <header className="faq-header">
          <div className="faq-eyebrow">
            <span className="faq-eyebrow-icon">◆</span>
            <span>SYSTEM PROTOCOLS // FAQ</span>
          </div>
          <h2 className="faq-title">
            KNOW THE <span className="text-green">BATTLEFIELD.</span>
          </h2>
        </header>

        <div className="faq-list">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.number}
                className={`faq-card ${isOpen ? 'open' : ''}`}
              >
                <div className="corner-bracket top-left" aria-hidden="true"></div>
                <div className="corner-bracket bottom-right" aria-hidden="true"></div>

                <button
                  type="button"
                  className="faq-card-header"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="faq-question-group">
                    <span className="faq-number">{item.number}</span>
                    <h3 className="faq-question">{item.question}</h3>
                  </div>
                  <span className="faq-toggle-icon">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-wrapper"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-line"></div>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
