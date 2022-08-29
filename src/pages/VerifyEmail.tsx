import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Background from "../assets/Background.jpg";
import { Navbar } from "../components";
import ErrorComponent from "../components/ErrorComponent";
import SuccessComponent from "../components/SuccessComponent";
import { useApi } from "../hooks";

const VerifyEmail = () => {
  const { search } = useLocation();
  const [isVerifying, setIsVerifying] = useState(true);
  const [result, setResult] = useState(false);
  const [error, setError] = useState(null);
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const token = query.get("token");
  const api = useApi();

  useEffect(() => {
    if (!token) return;
    api
      .verifyEmail(token)
      .then((result) => {
        console.log(result);
        setResult(result);
        setIsVerifying(false);
      })
      .catch((error) => {
        setError(error);
        setIsVerifying(false);
      });
  }, [token]);
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
            {(error || !result) && <ErrorComponent />}
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
