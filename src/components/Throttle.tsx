import { useThrottle } from "../hooks/useThrottle";

export default function Throttle() {
  const { throttle } = useThrottle();
  return (
    <>
      <button
        onClick={() => {
          alert("スロットがないです");
        }}
      >
        スロットなしボタン
      </button>
      <button
        onClick={() => {
          throttle(() => {
            alert("スロットあり");
          }, 4000);
        }}
      >
        スロットありボタン
      </button>
    </>
  );
}
