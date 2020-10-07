import React from "react";
import styles from "./Todo.module.css";
const Todo = ({ todo, completeTodo }) => {
  const handleClick = () => {
    completeTodo(todo.id);
  };

  const element = (
    <div className={styles.todo}>
      <button className={styles.checkbox} onClick={handleClick}>
        {todo.completed ? "✅" : "❎"}
      </button>
      <label className={todo.completed ? styles.completed : ""}>
        {todo.text}
      </label>
    </div>
  );

  return <li>{element}</li>;
};

export default Todo;
