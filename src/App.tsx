import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Background from "./assets/Background.svg";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <img
          className="fixed bg-cover bg-blend-multiply	bg-black	h-100% w-100% min-w-full min-h-full bg-gradient-to-b from-black to-black"
          src={Background}
        />
        <div className="flex-col relative justify-center">
          <Navbar />
          <div>
            <div className="flex flex-wrap justify-center mt-20 items-end mb-10">
              <div className="flex font-bold text-white text-5xl items-end">
                The
              </div>
              <div className="flex font-bold text-[#ffd000] text-5xl ml-2 items-end">
                Faster
              </div>
              <div className="flex font-bold text-white text-5xl items-end">
                ,
              </div>
              <div className="flex font-bold text-[#ffd000] text-5xl ml-2 items-end">
                Easier
              </div>
              <div className="flex text-white text-3xl ml-2 items-end">
                (And Economical) Way To Do
              </div>
              <div className="flex text-[#ffd000] text-5xl ml-2 font-bold items-end">
                KYC
              </div>
              <div className="flex text-white text-3xl ml-2 items-end">
                Compliance
              </div>
            </div>
            <div className="flex-row  text-center text-5xl mt-30">
              <div className="flex text-white text-xl mb-10 w-20% justify-center">
                Minimise the hassle of KYC compliance for your exchange and
                users with an end-to-end digital identity verification platform.
              </div>
              <div className="flex justify-center text-white mt-5 text-xl mb-5 font-sans font-bold">
                COMING SOON
              </div>
              <div className="flex justify-center text-center"></div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
