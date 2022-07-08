import DateTimeDisplay from "./utils/DateTimeDisplay";
import { useCountdown } from "./hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>ON AIR</span>
    </div>
  );
};

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ShowCounter: React.FC<Props> = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex center">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <p className="ml-5 mr-10">:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p className="ml-5 mr-10">:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p className="ml-5 mr-10">:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};


const CountDownTimer: React.FC = () => {
  const {countDown, getReturnValues} = useCountdown();

  const [days, hours, minutes, seconds] = getReturnValues(countDown);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountDownTimer;
