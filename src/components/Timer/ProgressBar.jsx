import { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ count,type }) => {
  const [timer, setTimer] = useState(count - 1);

  useEffect(() => {
    setTimer((prev) => prev + 1);
  }, [count]);

  const condition1 = type === "que" && "progress";
  const condition2 =
    timer < 5
      ? "progress0_4"
      : timer < 8
      ? "progress5_7"
      : timer > 7 && "progress8_10";

  return (
    <div className="timer">
      <div
        style={{ width: `${timer}0%` }}
        className={condition1 || condition2}
      ></div>
    </div>
  );
};

export default ProgressBar;
