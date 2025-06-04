import { useState, useRef } from "react";

export default function LikeButton() {
  const timerRef = useRef<number>(0);
  const [disabled, setDisabled] = useState(false); // 버튼 비활성화
  // [상태 , setter] = 초기값

  const handleClick = () => {
    if (disabled) return;

    setDisabled(true);

    timerRef.current = setInterval(() => {
      setDisabled(false);
      clearTimeout(timerRef.current);
    }, 1000);
  };

  // 몇 초 뒤에 한 번만 실행	setTimeout
  // 일정 간격으로 반복 실행	setInterval

  return (
    <button onClick={handleClick} disabled={disabled}>
      좋아요
    </button>
  );
}
