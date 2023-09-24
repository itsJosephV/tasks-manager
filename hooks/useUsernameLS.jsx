import { useState } from "react";

export function useUserLS(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storedUsername = localStorage.getItem(key);
    return storedUsername ? JSON.parse(storedUsername) : defaultValue;
  });
  return [state, setState, key];
}