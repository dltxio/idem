import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Background from "../assets/Background.jpg";
import { Navbar } from "../components";
import ErrorComponent from "../components/ErrorComponent";
import SuccessComponent from "../components/SuccessComponent";

const VerifyEmail = () => {
  const { search } = useLocation();
  const [isVerifying, setIsVerifying] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const token = query.get("token");
  useEffect(() => {
    axios
      .post("https://uat-proxy.idem.com.au/api/verifyEmail", { token })
      .then((result) => {
        setResult(result.data);
        setIsVerifying(false);
      })
      .catch((error) => {
        setError(error);
        setIsVerifying(false);
      });
  }, []);
  return (
    <>
      <div
        className="fixed bg-cover	bg-black w-full h-full bg-gradient-to-b from-black to-black brightness-[0.2]
	"
        style={{ backgroundImage: `url(${Background})` }}
      />
      <div className=" relative justify-center min-w-500">
        <Navbar />

        <div className="relative justify-center py-20">
          {isVerifying && (
            <div className="flex text-white text-5xl justify-center">
              VERIFYING...
            </div>
          )}
          <div className=" flex flex-row justify-center text-2xl">
            {error && <ErrorComponent />}
          </div>
          <div className=" flex flex-row justify-center text-2xl">
            {result && <SuccessComponent />}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
