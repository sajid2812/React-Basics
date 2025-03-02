import { useEffect, useRef, useState } from "react";

export function useDebounce(originalFn) {
  const ref = useRef();
  const fn = () => {
    clearTimeout(ref.current);
    ref.current = setTimeout(originalFn, 30);
  };
  return fn;
}
