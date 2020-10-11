import React from "react";
import styles from "./Todo.module.css";
const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const handleClick = () => {
    completeTodo(todo.id);
  };

  const handleDoubleClick = () => {
    deleteTodo(todo.id);
  };

  const element = (
    <div className={styles.todo} onDoubleClick={handleDoubleClick}>
      <button className={styles.checkbox} onClick={handleClick}>
        {todo.completed ? "✅" : "⚪"}
      </button>
      <label className={todo.completed ? styles.completed : ""} >
        {todo.text}
      </label>
    </div>
  );

  return <li>{element}</li>;
};

export default Todo;
