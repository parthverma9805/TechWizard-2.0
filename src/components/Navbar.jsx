import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/techwizard-logo.jpeg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  /* 📱 close menu on resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ⭐ FIXED SCROLL FUNCTION */
  const goHomeAndScroll = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
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

      {/* 🔽 MOBILE DROPDOWN MENU */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <button onClick={() => goHomeAndScroll("home")}>Home</button>
        <button onClick={() => goHomeAndScroll("rules")}>Rules</button>
        <button onClick={() => goHomeAndScroll("prizes")}>Prizes</button>
        <button onClick={() => goHomeAndScroll("contact")}>Contact</button>

        <Link to="/problem-statement" onClick={() => setOpen(false)}>
          Problem Statements
        </Link>
      </div>
    </motion.nav>
  );
}
