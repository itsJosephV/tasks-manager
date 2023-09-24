import React, { useState } from "react";
import { v4 as uuid } from "uuid";

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
        <div className="flex items-center">
          <input
            id="personal-radio"
            type="radio"
            name="category"
            value="personal"
            checked={selectedCategory === "personal"}
            onChange={handleRadioChange}
            className="radio radio-neutral-content "
          />
          <label
            htmlFor="personal-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Personal
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="bussiness-radio"
            type="radio"
            name="category"
            value="bussiness"
            checked={selectedCategory === "bussiness"}
            onChange={handleRadioChange}
            className="radio radio-accent"
          />
          <label
            htmlFor="bussiness-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Bussiness
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="education-radio"
            type="radio"
            name="category"
            value="education"
            checked={selectedCategory === "education"}
            onChange={handleRadioChange}
            className="radio radio-error"
          />
          <label
            htmlFor="education-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Education
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-full btn-neutral">
        Create
      </button>
    </form>
  );
};

export default TodoForm;
