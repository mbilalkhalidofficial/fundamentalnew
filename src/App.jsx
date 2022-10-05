import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../src/screens/Landing";
import Contact from "./screens/Contact";
import Knitted from "./screens/Knitted";
import Worker from "./screens/Worker";
import About from "./screens/About";
import Woven from "./screens/Woven";
import AOS from "aos";
import "./style/app.scss";
import "aos/dist/aos.css";
import "swiper/css";

function App() {
  AOS.init();
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/knitted" element={<Knitted />} />
      <Route path="/worker" element={<Worker />} />
      <Route path="/woven" element={<Woven />} />
    </Routes>
  );
}

export default App;
