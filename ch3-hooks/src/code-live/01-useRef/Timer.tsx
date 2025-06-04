import { useState, useRef } from "react";

export default function Timer() {
  const timerId = useRef<number | null>(null);
  const [count, setCount] = useState(0);

  function start() {
    timerId.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }

  function stop() {
    // clearInterval(timerId.current);
  }
  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={start}>시작</button>
      <button onClick={stop}>멈춤</button>
    </div>
  );
}
