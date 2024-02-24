import React, { useEffect, useState } from "react";
interface useDebounceType {
  value: any;
  delay: number;
}
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebaouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebaouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}
