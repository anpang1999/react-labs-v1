import { useState, useEffect } from "react";

// 자바스크립트 환경 x
// 리액트 환경 o
export default function IntervalCleanup() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <div>{seconds}초 경과</div>;
}
