import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProblemStatement from "./pages/ProblemStatement";
import FlameCanvas from "./components/FlameCanvas";

export default function App() {
  return (
    <>
      <FlameCanvas />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem-statement" element={<ProblemStatement />} />
      </Routes>
    </>
  );
}
