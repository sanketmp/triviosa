import { useState, useEffect, useRef } from "react";
import "./Timer.css";

const Timer = ({ count }) => {
  const [timer, setTimer] = useState(count-1);
  const [progressDone, setProgressDone] = useState();

  useEffect(() => {
    setTimer((prev) => prev + 1);
  }, [count]);
  // const refInterval = useRef();

  // useEffect(() => {
  //   refInterval.current = setInterval(() => {
  //     setTimer((prevTimer) => prevTimer + 1);
  //   }, 1000);

  //   return () => clearInterval(refInterval.current);
  // }, []);

  // useEffect(() => {
  //   setProgressDone(100 * (timer / duration));
  //   if (timer === duration) {
  //     clearInterval(refInterval.current);
  //     setTimeout(() => {
  //       onTimeUp();
  //     }, 1000);
  //   }
  // }, [timer]);

  return (
    <div className="timer">
      <div style={{ width: `${timer}0%` }} className="progress"></div>
    </div>
  );
};

export default Timer;