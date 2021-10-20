import { useState, useEffect } from "react";
import cn from "classnames";
import "./Time.scss";

const updateTime = (callback) => {
  const now = new Date();
  const currenTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  callback(currenTime);
};

export const Time = ({ className, format_date }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    updateTime(setTime);
    const interval = setInterval(() => {
      updateTime(setTime);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={cn(className, "time")}>
      <div className="time-text">{time}</div>
      <div className="time-date">{format_date(new Date())}</div>
    </div>
  );
};
