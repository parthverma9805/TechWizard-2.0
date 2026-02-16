import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProblemStatement from "./pages/ProblemStatement";
import FlameCanvas from "./components/FlameCanvas";
import Portal from "./pages/Portal";


export default function App() {
  return (
    <>
      <FlameCanvas />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/problem-statement" element={<ProblemStatement />} />
      </Routes>
    </>
  );
}
