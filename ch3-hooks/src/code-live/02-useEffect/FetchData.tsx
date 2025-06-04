import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function FetchData() {
  // https://jsonplaceholder.typicode.com/todos/1
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1") // fetch 는 promise 반환
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  // 컴포넌트가 처음 마운트될 때 단 한 번만 실행

  // 데이터를 불러올 때 "로딩중..." 표시
  return (
    <div>
      {todo ? (
        <ul>
          <li>id: {todo.id}</li>
          <li>title: {todo.title}</li>
        </ul>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  ); // 옵셔널 체이닝 ?  없으면 접근하지 않는다
}
