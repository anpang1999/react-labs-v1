import { useEffect } from "react";

export default function MountLog() {
  useEffect(() => {
    console.log("Mount!");
  }, []);

  return <p>컴포넌트가 마운트되었습니다.</p>;
}
