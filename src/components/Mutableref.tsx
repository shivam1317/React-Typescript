import { useEffect, useState, useRef } from "react";

type Props = {};

const Mutableref = (props: Props) => {
  const [timer, setTime] = useState(0);
  // making interval refererance
  const intervalRef = useRef<number | undefined>(undefined);
  // This function will clear the interval
  const stopInterval = () => {
    setTime(0);
    window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    // It will change the value of intervalRef's current
    intervalRef.current = window.setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    // we will call stopInterval function when component unmounts
    return () => {
      stopInterval();
    };
  }, []);
  return (
    <div>
      <p>Time: {timer}</p>
      <button onClick={() => stopInterval()}>Clear Interval</button>
    </div>
  );
};

export default Mutableref;
