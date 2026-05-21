import { useRef } from "react";

export function useThrottle() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const throttle = (func: () => void, ms: number) => {
    if (timerRef.current) return;
    func();
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
    }, ms);
  };
  return { throttle };
}
