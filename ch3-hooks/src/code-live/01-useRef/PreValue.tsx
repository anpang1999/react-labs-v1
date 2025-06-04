import { useRef, useState } from "react";

export default function PrevValue() {
  const [value, setValue] = useState("");
  const prevValue = useRef("");
  let preVal = "";

  function handelChange(e: React.ChangeEvent<HTMLInputElement>) {
    prevValue.current = value; // 이전값
    setValue(e.target.value);
  }
  return (
    <div>
      <input value={value} type="text" onChange={handelChange} />
      <p>이전 값 : {prevValue.current}</p>
    </div>
  );
}

// ✅ 1. useState  렌더링에 영향을 주는 상태
// ✅ 2. useRef  렌더링과 상관없는 상태
