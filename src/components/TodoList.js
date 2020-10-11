import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = function ({ todos, completeTodo, deleteTodo }) {
  const completedTodos = todos.filter((todo) => todo.completed);
  const activeTodos = todos.filter((todo) => !todo.completed);

  const completedTodosDOM = completedTodos.length !== 0 && (
    <>
      <div className={styles.completeTodoBox}>
        <span className={styles.completeTodoArrow}>✔</span>
        <span className={styles.completeTodoText}>已完成</span>
      </div>
      <ul>
        {completedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </>
  );

  return (
    <div>
      <ul>
        {activeTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
      {completedTodosDOM}
    </div>
  );
};

export default TodoList;
