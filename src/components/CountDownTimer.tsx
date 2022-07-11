import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles.css";

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOURS = 3600;
const SECONDS_IN_DAY = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension: string, time: number) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time: number) => (SECONDS_IN_MINUTE - time) | 0;
const getTimeMinutes = (time: number) =>
  ((time % SECONDS_IN_HOURS) / SECONDS_IN_MINUTE) | 0;
const getTimeHours = (time: number) =>
  ((time % SECONDS_IN_DAY) / SECONDS_IN_HOURS) | 0;
const getTimeDays = (time: number) => (time / SECONDS_IN_DAY) | 0;

export default function CountDownTimer() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / SECONDS_IN_DAY);
  const daysDuration = days * SECONDS_IN_DAY;

  return (
    <div className="App flex">
      <CountdownCircleTimer
        {...timerProps}
        colors="#FAEE6C"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        size={225}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <div className="ml-10">
        <CountdownCircleTimer
          {...timerProps}
          colors="#FAEE6C"
          duration={SECONDS_IN_DAY}
          initialRemainingTime={remainingTime % SECONDS_IN_DAY}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > SECONDS_IN_HOURS
          })}
          size={225}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("hours", getTimeHours(SECONDS_IN_DAY - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className="ml-10">
        <CountdownCircleTimer
          {...timerProps}
          colors="#FAEE6C"
          duration={SECONDS_IN_HOURS}
          initialRemainingTime={remainingTime % SECONDS_IN_HOURS}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > SECONDS_IN_MINUTE
          })}
          size={225}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime(
                "minutes",
                getTimeMinutes(SECONDS_IN_HOURS - elapsedTime)
              )}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className="ml-10">
        <CountdownCircleTimer
          {...timerProps}
          colors="#FAEE6C"
          duration={SECONDS_IN_MINUTE}
          initialRemainingTime={remainingTime % SECONDS_IN_MINUTE}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > 0
          })}
          size={225}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("seconds", getTimeSeconds(elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
