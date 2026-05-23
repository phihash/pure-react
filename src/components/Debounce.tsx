import { useDebounce } from "../hooks/useDebounce";
export default function Debounce() {
  const { debounce: _debounce } = useDebounce();

  return (
    <>
      <button></button>
    </>
  );
}
