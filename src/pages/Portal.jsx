import { motion } from "framer-motion";

export default function TechWizardPortal() {

  const studentForm = "https://forms.gle/rr1Cec1S5cX1nsrG7";
  const mentorForm = "https://docs.google.com/forms/d/e/1FAIpQLSdlJ9AaC-8S8gBPmBway4jb89ZXr-D_FPyFszhkGYBDdVzpMQ/viewform?usp=header";

  return (
    <div className="tw-portal-wrapper">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="tw-portal-card"
      >
        <h1 className="tw-title">TECH WIZARD PORTAL</h1>
        <p className="tw-subtitle">
          Choose your role to continue registration
        </p>

        <div className="tw-grid">

          {/* STUDENT */}
          <div className="tw-role-card">
            <h2>🎓 Students</h2>
            <p>Register your team and participate in the hackathon.</p>

            <button
              onClick={() => window.open(studentForm, "_blank")}
              className="tw-btn student"
            >
              Register as Student
            </button>
          </div>

          {/* MENTOR */}
          <div className="tw-role-card">
            <h2>🧠 Mentors</h2>
            <p>Guide teams and help them build amazing projects.</p>

            <button
              onClick={() => window.open(mentorForm, "_blank")}
              className="tw-btn mentor"
            >
              Register as Mentor
            </button>
          </div>

        </div>

        <p className="tw-footer">
          After submitting the form, you can safely close the tab.
        </p>

      </motion.div>
    </div>
  );
}
