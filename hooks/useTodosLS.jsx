import React, { useEffect, useState } from "react";

export function useTodosLS(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storedTodos = localStorage.getItem(key);
    return storedTodos ? JSON.parse(storedTodos) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
