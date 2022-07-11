import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles.css";

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOURS = 3600;
const SECONDS_IN_DAY = 86400;

const timerProps = {
  isPlaying: true,
  size: 225,
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

const getTimeSeconds = (time: number) => Math.floor(SECONDS_IN_MINUTE - time);
const getTimeMinutes = (time: number) =>
  Math.floor((time % SECONDS_IN_HOURS) / SECONDS_IN_MINUTE);
const getTimeHours = (time: number) =>
  Math.floor((time % SECONDS_IN_DAY) / SECONDS_IN_HOURS);
const getTimeDays = (time: number) => Math.floor(time / SECONDS_IN_DAY);

const CountDownTimer = () => {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const duration = 263248;
  const endTime = startTime + duration; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / SECONDS_IN_DAY);
  const daysDuration = days * SECONDS_IN_DAY;

  return (
    <div className="App flex">
      <CountdownCircleTimer
        {...timerProps}
        colors="#FAEE6C"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
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
};
export default CountDownTimer;
