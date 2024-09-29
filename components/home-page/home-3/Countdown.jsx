"use client";
import { useState, useEffect } from "react";
// import styles from "./Countdown.module.scss";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        const timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
        return timeLeft;
      } else {
        return null; // Countdown is complete
      }
    };

    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    // Initialize countdown on mount
    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  if (!timeLeft) {
    return <p>Oops! Registration's over</p>; // When countdown is over
  }

  return (
    <div className="countdown">
      <div className="timeBlock">
        <span className="number">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="timeBlock">
        <span className="number">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="timeBlock">
        <span className="number">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="timeBlock">
        <span className="number">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
