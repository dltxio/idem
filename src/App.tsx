import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Background from "./assets/Background.svg";
import testGroupQRCode from "./assets/testGroupQRCode.png";
import IdemVideo from "./components/IdemPromoVideo";

export const App = () => {
  return (
    <BrowserRouter>
      <div
        className="fixed bg-cover	bg-black w-full h-full bg-gradient-to-b from-black to-black"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="flex-col relative justify-center min-w-500">
        <Navbar />
        <div />
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
              Minimise the hassle of KYC compliance for your exchange and users
              with an end-to-end digital identity verification platform.
            </div>

            <div className="flex text-white text-xl mb-10 w-20% justify-center">
              Join our test group via TestFlight today.
            </div>
            <div className="flex justify-center text-center pb-10">
              <img
                src={testGroupQRCode}
                alt="qrCode"
                width={350}
                height={320}
              />
              <div className="px-10">
                <IdemVideo />
              </div>
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
