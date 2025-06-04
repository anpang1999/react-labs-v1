import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFoucs() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="입력... " />
      <button onClick={handleFoucs}>포커스 주기</button>
    </div>
  );
}
