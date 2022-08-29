import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import VerifyEmail from "./pages/VerifyEmail";
import { ApiProvider } from "./providers/Api";

export const App = () => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
};
