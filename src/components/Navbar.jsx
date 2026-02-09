import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/techwizard-logo.jpeg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  /* 📱 close menu on resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
        setRulesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ⭐ FIXED SCROLL + RULE TYPE */
  const goHomeAndScroll = (id, ruleType) => {
    setOpen(false);
    setRulesOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { ruleType } });

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      if (ruleType) {
        window.dispatchEvent(
          new CustomEvent("changeRules", { detail: ruleType })
        );
      }
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="navbar wizard-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO */}
      <div className="logo-area" onClick={() => goHomeAndScroll("home")}>
        <img src={logo} alt="Tech Wizard Logo" />
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>

      {/* 🔽 MOBILE MENU */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <button onClick={() => goHomeAndScroll("home")}>Home</button>

        {/* RULES WITH SUB MENU */}
        <button onClick={() => setRulesOpen(!rulesOpen)}>
          Rules {rulesOpen ? "▴" : "▾"}
        </button>

        {rulesOpen && (
          <div
            style={{
              paddingLeft: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <button
              style={{ fontSize: "0.95rem" }}
              onClick={() => goHomeAndScroll("rules", "participants")}
            >
              Participants
            </button>

            <button
              style={{ fontSize: "0.95rem" }}
              onClick={() => goHomeAndScroll("rules", "mentors")}
            >
              Mentors
            </button>
          </div>
        )}

        <button onClick={() => goHomeAndScroll("prizes")}>Prizes</button>
        <button onClick={() => goHomeAndScroll("contact")}>Contact</button>

        <Link to="/problem-statement" onClick={() => setOpen(false)}>
          Problem Statements
        </Link>
      </div>
    </motion.nav>
  );
}
