import { useCallback, useState } from "react";

export function useArray<T>(defaultValue?: Array<T>) {
  const [array, setArray] = useState<Array<T>>(defaultValue ?? []);

  const push = useCallback(
    (value: T) => setArray((prev) => [...prev, value]),
    []
  );

  const wipe = useCallback(() => setArray(() => []), []);

  return {
    push,
    wipe,
    values: array,
  };
}
