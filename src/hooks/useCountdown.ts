import React from "react";
import { useEffect, useState } from "react";

const useCountdown = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const countDownDate = new Date(dateTimeAfterThreeDays).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1000);
    }, 1000);

    console.log(new Date(countDown));

    return () => clearInterval(interval);
  }, [countDown]);

    return {
        countDown,
        getReturnValues
    }
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
