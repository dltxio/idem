type Props = {
  isDanger: boolean;
  value: number;
  type: string;
};

const DateTimeDisplay: React.FC<Props> = (props) => {
  return (
    <div className={props.isDanger ? "countdown danger" : "countdown"}>
      <p>{props.value}</p>
      <span>{props.type}</span>
    </div>
  );
};

export default DateTimeDisplay;
