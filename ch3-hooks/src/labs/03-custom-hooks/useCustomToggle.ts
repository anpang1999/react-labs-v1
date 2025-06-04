import { useState, useCallback } from "react";

export function useCustomToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
}
