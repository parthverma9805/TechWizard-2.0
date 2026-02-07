import { motion } from "framer-motion";

export default function ProblemStatement() {
  return (
    <motion.section
      className="section card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1>📄 Problem Statements</h1>
      <p>Upload or display problem statements here.</p>
    </motion.section>
  );
}
