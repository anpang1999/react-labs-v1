import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>();

  // 최신 콜백을 ref에 저장
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = setInterval(tick, delay);

    return () => {
      clearInterval(id);
      console.log("Clean up interval!");
    };
  }, [delay]);
}
