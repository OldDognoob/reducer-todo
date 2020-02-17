
import React, { useState } from "react";

const TodoForm = ({ addTodo, clearCompleted }) => {
  const [item, setItem] = useState("");
  const submitHandler = event => {
    event.preventDefault();
    addTodo(item);
    setItem("");
  };

  const clearHandler = event => {
    event.preventDefault();
    clearCompleted();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="item"
        placeholder="new todo"
        onChange={e => setItem(e.target.value)}
        value={item}
      />
      <div className="todo-btn">
        <button className="todo-add" type="submit">
          Add
        </button>
        <button className="todo-clear" onClick={clearHandler}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
