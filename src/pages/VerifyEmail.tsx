import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
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
