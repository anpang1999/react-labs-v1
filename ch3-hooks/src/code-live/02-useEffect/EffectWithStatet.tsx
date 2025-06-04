import { useEffect, useState } from "react";

export default function EffectWithState() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // update
  useEffect(() => {
    console.log(count);
    console.log(count2);
  }, [count, count2]);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>클릭</button>
      <button onClick={() => setCount2((c) => c + 1)}>클릭2</button>
    </div>
  );
}
