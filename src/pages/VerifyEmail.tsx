import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="bg-black">
      HEADER
      {isVerifying && <div>VERIFYING...</div>}
      {error && <ErrorComponent />}
      {result && <SuccessComponent />}
    </div>
  );
};

const ErrorComponent = () => {
  return <div>ERROR</div>;
};

const SuccessComponent = () => {
  return <div>SUCCESS</div>;
};

export default VerifyEmail;
