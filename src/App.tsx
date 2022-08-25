import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import VerifyEmail from "./pages/VerifyEmail";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  );
};
