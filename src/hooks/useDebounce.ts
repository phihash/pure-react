import { useRef } from "react";
export function useDebounce() {
  const timerRef = useRef(null);
  const debounce = (func: () => void, ms: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      func();
    }, ms);
  };
  return { debounce };
}
