import { motion } from "framer-motion";
import wizard from "../assets/techwizard-logo.jpeg";

export default function Home() {
  return (
    <>
      {/* 🧙‍♂️ HERO SECTION */}
      <section id="home" className="wizard-hero">
        <div className="wizard-left">
          <img src={wizard} className="wizard-image" />
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

      {/* KEEP YOUR OLD SECTIONS BELOW */}
      {/* 📜 HACKATHON RULES */}
<section id="rules" className="section-dark">
  <h2 className="section-title">Hackathon Rules</h2>

  <div className="rules-grid">
    {[
      "Team size: 6 members (minimum 1 female)",
      "Round 1: PPT presentation",
      "Round 2: Prototype development",
      "PPT must follow SIH guidelines",
      "₹80 registration fee per member",
      "Certificates for all participants",
      "Shortlisted teams nominated for SIH 2026",
    ].map((rule, i) => (
      <div key={i} className="rule-card">{rule}</div>
    ))}
  </div>
</section>


{/* 🏆 PRIZES */}
{/* 🏆 PRIZE MONEY */}
<section id="prizes" className="section-dark">
  <h2 className="section-title">Prize Pool</h2>

  <div className="prizes-new">
    <div className="prize-new gold">
      <h3>🥇 First Prize</h3>
      <span>₹2,100</span>
    </div>

    <div className="prize-new silver">
      <h3>🥈 Second Prize</h3>
      <span>₹1,500</span>
    </div>

    <div className="prize-new bronze">
      <h3>🥉 Third Prize</h3>
      <span>₹1,000</span>
    </div>
  </div>
</section>


{/* 📞 CONTACT */}
{/* 📞 CONTACT */}
<section id="contact" className="section-dark">
  <h2 className="section-title">Contact Organizers</h2>

  <div className="contact-grid">
    <div className="contact-card">
      <h3>Shubham Srivastava</h3>
      <p>+91 6394658895</p>
    </div>

    <div className="contact-card">
      <h3>Deepak Kaushik</h3>
      <p>+91 7906924141</p>
    </div>
  </div>
</section>

    </>
  );
}