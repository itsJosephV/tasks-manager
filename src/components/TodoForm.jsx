import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import CategoryRadio from "./CategoryRadio";

const TodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("personal");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodoItem = {
      id: uuid(),
      todo: newTodo,
      category: selectedCategory,
      done: false,
      createdAt: new Date().getTime(),
    };
    setTodos((prev) => [...prev, newTodoItem]);

    setNewTodo("");
    setSelectedCategory("personal");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* <input type="text" onChange={handleInputChange} value={newTodo} /> */}
      <div>
        <label
          htmlFor="new-todo-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          What's next?
        </label>
        <input
          onChange={handleInputChange}
          value={newTodo}
          type="text"
          placeholder="Enter a new task"
          className="input input-bordered w-full border-zinc-700"
          id="new-todo-input"
          required
          maxLength={30}
        />
      </div>
      <div className="border p-2 border-zinc-700 rounded-lg flex flex-row gap-5 items-center">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Select a category
        </label>
        <CategoryRadio
          name={"category"}
          value={"personal"}
          className={"radio radio-neutral-content"}
          selectedCategory={selectedCategory}
          handleRadioChange={handleRadioChange}
        />
        <CategoryRadio
          name={"category"}
          value={"bussiness"}
          className={"radio radio-accent"}
          selectedCategory={selectedCategory}
          handleRadioChange={handleRadioChange}
        />
        <CategoryRadio
          name={"category"}
          value={"education"}
          className={"radio radio-error"}
          selectedCategory={selectedCategory}
          handleRadioChange={handleRadioChange}
        />
      </div>
      <button type="submit" className="btn btn-full btn-neutral">
        Create
      </button>
    </form>
  );
};

export default TodoForm;
