import React, { useRef, useState } from "react";
import { DeleteIcon, EditIcon } from "../icons";
import classNames from "classnames";

const TodoCard = ({ id, todo, category, done, createdAt, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [editedTodo, setEditedTodo] = useState(todo);
  const [isDone, setIsDone] = useState(done);
  const inputRef = useRef(null);

  const checkBoxClassName = classNames("checkbox", {
    "checkbox-neutral-content": category === "personal",
    "checkbox-success": category === "bussiness",
    "checkbox-error": category === "education",
  });

  const handleDelete = () => {
    const updateTodos = todos.filter((item) => item.id !== id);
    setTodos(updateTodos);
  };

  const handleEditMode = () => {
    setIsEditing(!isEditing);
    inputRef.current.focus();
  };

  // const handleKeySubmit = (e) => {
  //   e.preventDefault();
  //   setIsEditing(true);
  // };

  const handleInputBlur = () => {
    setIsEditing(true);

    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, todo: editedTodo };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const handleInputOnChange = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleCheckBox = () => {
    setIsDone(!isDone);

    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: !isDone };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="border p-2 rounded-lg border-zinc-700 px flex flex-row justify-between items-center mb-3">
      <div className="flex flex-row items-center gap-2 w-full mr-3">
        <input
          className={checkBoxClassName}
          type="checkbox"
          checked={isDone}
          onChange={handleCheckBox}
        />
        {/* <form className="w-full" onSubmit={handleKeySubmit}>  */}
        <input
          ref={inputRef}
          value={editedTodo}
          readOnly={isEditing}
          onBlur={handleInputBlur}
          onChange={handleInputOnChange}
          type="text"
          placeholder="Edit this"
          className={`${
            !isEditing ? "text-zinc-500" : "text-white"
          } input input-ghost w-full text-[18px]`}
          maxLength={30}
        />
        {/* </form> */}

        {/* <small>
          {category} <span>{createdAt}</span>
        </small> */}
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="btn p-2 hover:border-zinc-600"
          onClick={handleEditMode}
        >
          <EditIcon width={"2em"} height={"2em"} fill={"#71717a"} />
        </button>
        <button className="btn p-2 hover:border-red-600" onClick={handleDelete}>
          <DeleteIcon width={"2em"} height={"2em"} fill={"#71717a"} />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
