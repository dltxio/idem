import React from "react";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import background from "./assets/background.png";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="relative">
        <img src={background} className="absolute top-0 left-0" />
        <div className="z-10 relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
