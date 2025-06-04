import React, { useState, useRef, useEffect } from "react";

const QuickMathGame: React.FC = () => {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [result, setResult] = useState("");
  const timerId = useRef<number | null>(null); // ✅ number로 변경

  // 문제 시작
  const startGame = () => {
    const a = Math.floor(Math.random() * 90 + 10); // 두 자리 수
    const b = Math.floor(Math.random() * 90 + 10);
    setNum1(a);
    setNum2(b);
    setUserAnswer("");
    setIsDisabled(false);
    setResult("");

    // 타이머 설정
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      checkAnswer();
    }, 5000);
  };

  // 정답 확인
  const checkAnswer = () => {
    if (num1 === null || num2 === null) return;
    const correct = num1 * num2;
    const isCorrect = parseInt(userAnswer, 10) === correct;
    setResult(
      `${
        isCorrect ? "✅ 정답입니다!" : "❌ 오답입니다!"
      } 정답은 ${num1} × ${num2} = ${correct}입니다.`
    );
    setIsDisabled(true);
  };

  // 클린업 (언마운트 시 타이머 제거)
  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
        console.log("Clean up!");
      }
    };
  }, []);

  return (
    <div>
      <h2> 5초 암산 곱셈 퀴즈</h2>
      {num1 !== null && num2 !== null ? (
        <div>
          <p>
            문제: {num1} × {num2} = ?
          </p>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={isDisabled}
          />
        </div>
      ) : (
        <p>시작 버튼을 눌러주세요</p>
      )}
      <div style={{ marginTop: "10px" }}>
        <button onClick={startGame}>시작 / 다시 시작</button>
      </div>
      {result && (
        <div style={{ marginTop: "15px" }}>
          <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default QuickMathGame;
