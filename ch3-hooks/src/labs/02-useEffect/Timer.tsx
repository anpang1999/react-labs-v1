import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const timerId = useRef<number | null>(null);

  const start = () => {
    if (timerId.current) return;
    timerId.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stop = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  useEffect(() => {
    if (timerId.current) {
      clearInterval(timerId.current); // 타이머 해제
      console.log("Clean up!");
    }
  }, []);
  // useEffect의 두 번째 인자로 빈 배열 ([])을 전달하면,
  // 이 useEffect는 컴포넌트가 마운트될 때 한 번만 실행되고,
  // 리턴한 함수가 있다면 컴포넌트가 언마운트될 때 실행됩니다.

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={start}>시작</button>
      <button onClick={stop}>멈춤</button>
    </div>
  );
}
