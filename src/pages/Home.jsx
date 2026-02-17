import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import wizard from "../assets/techwizard-logo.jpeg";

export default function Home() {
  const [activeRule, setActiveRule] = useState("participants");
  const location = useLocation();
  const navigate = useNavigate();

  /* ⏰ SET REGISTRATION OPEN TIME HERE */
  const registrationDate = new Date("2026-02-17T16:00:00");

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  /* 🔄 HANDLE NAVBAR RULE CLICK */
  useEffect(() => {
    if (location.state?.ruleType) {
      setActiveRule(location.state.ruleType);
    }

    const handler = (e) => setActiveRule(e.detail);
    window.addEventListener("changeRules", handler);
    return () => window.removeEventListener("changeRules", handler);
  }, [location.state]);

  /* ⏰ COUNTDOWN TIMER */
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = registrationDate - now;

      if (diff <= 0) {
        setIsRegistrationOpen(true);
        setTimeLeft("Registrations are now OPEN 🚀");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  /* 🔓 PORTAL CLICK */
  const handlePortalClick = () => {
    if (!isRegistrationOpen) {
      alert("🔒 Portal is locked. It will unlock when registrations open.");
      return;
    }

    alert("🚀 Portal Unlocked!");
    navigate("/portal");
  };

  return (
    <>
      {/* HERO */}
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

            {/* ⏰ COUNTDOWN BUTTON */}
            <button className="reg-btn no-click">
              {isRegistrationOpen
                ? "Registrations Open ✅"
                : `Opens in ${timeLeft}`}
            </button>

            {/* 🔓 PORTAL BUTTON */}
            <button
              className={`portal-btn ${isRegistrationOpen ? "active-btn" : ""}`}
              onClick={handlePortalClick}
            >
              {isRegistrationOpen ? "Enter Portal" : "Unlock Portal"}
            </button>

          </div>
        </motion.div>
      </section>

      {/* RULES */}
      <section id="rules" className="section-dark">
        <h2 className="section-title">Hackathon Rules</h2>

        <div className="rule-toggle">
          <button
            className={`toggle-btn ${activeRule === "participants" ? "active" : ""}`}
            onClick={() => setActiveRule("participants")}
          >
            Participants
          </button>

          <button
            className={`toggle-btn ${activeRule === "mentors" ? "active" : ""}`}
            onClick={() => setActiveRule("mentors")}
          >
            Mentors
          </button>
        </div>

        <div className="rules-grid">
          {(activeRule === "participants"
            ? [
                "Team size: Each team must consist of 4 - 6 members (minimum 1 female)",
                "All team members must be registered participants",
                "All students are required to report to the auditorium by 9:00 AM sharp.",
                "A minimum 2 team members must be present at the desk at all times.",
                "Leaving the premises is permitted only in emergencies with prior coordinator approval.",
                "During the presentation, a minimum of two team members must present their ideas.",
                "Seeking help from students outside the premises for project development during the hackathon is strictly prohibited.",
                "Students must not receive complete code from any mentor. If this happens, both the student team and the mentor will be disqualified.",
                "₹150 registration fee per member taking part in the hackathon",
                "GitHub submission from every team member is mandatory.",
              ]
            : [
                "Mentors must not write the complete code for any team. If this occurs, both the mentor and the team will be disqualified.",
                "All mentors are required to report to the auditorium by 9:00 AM sharp.",
                "Mentors should guide only assigned teams",
                "Idea ownership remains with students",
                "Mentors available during evaluation",
                "Mentors must ensure fair practices",
              ]
          ).map((rule, i) => (
            <div key={i} className="rule-card flame-card">{rule}</div>
          ))}
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" className="section-dark">
        <h2 className="section-title">Prize Pool</h2>
        <div className="prizes-new">
          <div className="prize-new gold flame-card"><h3>🥇 First Prize</h3><span>₹2,500</span></div>
          <div className="prize-new silver flame-card"><h3>🥈 Second Prize</h3><span>₹2,000</span></div>
          <div className="prize-new bronze flame-card"><h3>🥉 Third Prize</h3><span>₹1,500</span></div>
        </div>
      </section>

      {/* CONTACT */}
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

