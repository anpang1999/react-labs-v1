import { useState, useEffect } from "react";

export default function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count is", count);
  }, [count]);

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={() => setCount((n) => n + 1)}>+1</button>
    </div>
  );
}
