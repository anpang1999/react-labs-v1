import { useState } from "react";

type ToggleReturn = [boolean, () => void];

export function useToggle(initial = false): ToggleReturn {
  // 시작 이름을 use로 설정해야 인식
  const [on, seton] = useState<boolean>(false);

  const toggle = () => {
    seton((v) => !v);
  };
  return [on, toggle];
}
