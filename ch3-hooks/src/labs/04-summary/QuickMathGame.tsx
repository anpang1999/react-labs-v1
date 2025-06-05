import { useState, useRef } from "react";

export default function QuickMathGame() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [disabled, setDisabled] = useState(true);
  const timerRef = useRef<number | null>(null);

  const startQuiz = () => {
    const a = Math.floor(Math.random() * 90) + 10; // 10~99
    const b = Math.floor(Math.random() * 90) + 10;
    setNum1(a);
    setNum2(b);
    setAnswer("");
    setResult("");
    setDisabled(false);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      checkAnswer();
    }, 5000);
  };

  const checkAnswer = () => {
    const correct = num1 * num2;
    const isCorrect = parseInt(answer, 10) === correct;
    setResult(
      isCorrect
        ? `정답! 정답은 ${num1} × ${num2} = ${correct}입니다.`
        : `오답! 정답은 ${num1} × ${num2} = ${correct}입니다.`
    );
    setDisabled(true);
  };

  return (
    <div>
      {result ? (
        <p>{result}</p>
      ) : (
        <p>
          {num1} × {num2} = ?
        </p>
      )}
      <input
        type="number"
        value={answer}
        disabled={disabled}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer} disabled={disabled}>
        정답 제출
      </button>
      <button onClick={startQuiz}>시작</button>
    </div>
  );
}
