import { useEffect } from "react";

export default function BasicEffect() {
  useEffect(() => {
    alert("마운트 시 호출!");
  }, []); // mount 될때 한 번
  return <></>;
}
