import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import background from "./assets/background.png";
import CountdownTimer from "./components/CountDownTimer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="min-width: 1920px; margin: 0 auto; max-height: 1080px;">
        <div className="relative">
          <img src={background} className="absolute top-0 left-0" />
          <div className="z-10 relative">
            <Navbar />
            <div className="mt-20">
              <div className="flex-col justify-center text-[#FFFFFF] text-center mt-10 text-5xl">
                <div className="flex justify-center text-[#FFFFFF] mt-5 text-2xl mb-10">
                  Coming soon...
                </div>
                <div className="flex justify-center text-center">
                  <CountdownTimer />
                </div>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
