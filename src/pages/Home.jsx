import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import wizard from "../assets/techwizard-logo.jpeg";

export default function Home() {
  const [activeRule, setActiveRule] = useState("participants");
  const location = useLocation();

  /* 🔄 HANDLE NAVBAR RULE CLICK */
  useEffect(() => {
    if (location.state?.ruleType) {
      setActiveRule(location.state.ruleType);
    }

    const handler = (e) => {
      setActiveRule(e.detail);
    };

    window.addEventListener("changeRules", handler);
    return () => window.removeEventListener("changeRules", handler);
  }, [location.state]);

  return (
    <>
      {/* 🧙 HERO */}
      <section id="home" className="wizard-hero">
        <div className="wizard-left">
          <img src={wizard} className="wizard-image" alt="TechWizard" />
        </div>

        <motion.div
          className="wizard-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>
            TECH WIZARD 2.0 <br />
            <span>HACKATHON</span>
          </h1>

          <p className="tagline">Unleash Your Inner Coder</p>

          <div className="hero-buttons">
            <button className="reg-btn">REGISTRATION OPENING SOON</button>
            <button className="portal-btn">Unlock Portal</button>
          </div>
        </motion.div>
      </section>

      {/* 📜 RULES */}
      <section id="rules" className="section-dark">
        <h2 className="section-title">Hackathon Rules</h2>

        <div className="rule-toggle">
          <button
            className={`toggle-btn ${
              activeRule === "participants" ? "active" : ""
            }`}
            onClick={() => setActiveRule("participants")}
          >
            Participants
          </button>

          <button
            className={`toggle-btn ${
              activeRule === "mentors" ? "active" : ""
            }`}
            onClick={() => setActiveRule("mentors")}
          >
            Mentors
          </button>
        </div>

        <div className="rules-grid">
          {(activeRule === "participants"
            ? [
                "Team size: Maximum 6 members (minimum 1 female)",
                "Round 1: PPT Presentation",
                "Round 2: Prototype Development",
                "PPT must follow SIH guidelines",
                "₹80 registration fee per member",
                "Certificates for all participants",
                "Top teams nominated for SIH 2026",
              ]
            : [
                "Mentors guide only assigned teams",
                "Mentors must not code for teams",
                "Idea ownership remains with students",
                "Mentors available during evaluation",
                "Mentors must ensure fair practices",
                "Follow SIH ethics & conduct",
              ]
          ).map((rule, i) => (
            <div key={i} className="rule-card flame-card">
              {rule}
            </div>
          ))}
        </div>
      </section>

      {/* 🏆 PRIZES */}
      <section id="prizes" className="section-dark">
        <h2 className="section-title">Prize Pool</h2>

        <div className="prizes-new">
          <div className="prize-new gold flame-card">
            <h3>🥇 First Prize</h3>
            <span>₹2,100</span>
          </div>
          <div className="prize-new silver flame-card">
            <h3>🥈 Second Prize</h3>
            <span>₹1,500</span>
          </div>
          <div className="prize-new bronze flame-card">
            <h3>🥉 Third Prize</h3>
            <span>₹1,000</span>
          </div>
        </div>
      </section>

      {/* 📞 CONTACT */}
      <section id="contact" className="section-dark">
        <h2 className="section-title">Contact Organizers</h2>

        <div className="contact-grid">
          <div className="contact-card flame-card">
            <h3>Shubham Srivastava</h3>
            <p>+91 6394658895</p>
          </div>

          <div className="contact-card flame-card">
            <h3>Deepak Kaushik</h3>
            <p>+91 7906924141</p>
          </div>
        </div>
      </section>
    </>
  );
}
