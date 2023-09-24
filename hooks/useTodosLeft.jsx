import { useState, useEffect } from "react";

export const useTodosLeft = (todoList) => {
  const [todosLeft, setTodosLeft] = useState(0);

  useEffect(() => {
    const count = todoList.filter((item) => !item.done).length;
    setTodosLeft(count);
  }, [todoList]);

  return todosLeft;
};


