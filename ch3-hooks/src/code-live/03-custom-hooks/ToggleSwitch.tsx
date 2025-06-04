import { useToggle } from "./useToggle";

export function ToggleSwitch() {
  //   const [on, seton] = useState<boolean>(false);
  const [on, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}> {on ? "켜짐" : "꺼짐"} </button>
    </div>
  );
}
