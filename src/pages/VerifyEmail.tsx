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
    <div>
      <div>Verify Email </div>
      <div>Token : {token} </div>
      <br />
      <div>Status</div>
      {isVerifying && <div>Verifying...</div>}
      {result && <div>Result : {JSON.stringify(result)} </div>}
      {error && <div>Error : {JSON.stringify(error)} </div>}
    </div>
  );
};

export default VerifyEmail;
