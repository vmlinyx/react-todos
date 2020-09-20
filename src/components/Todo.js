import React from "react";

const Todo = function ({ text, todo, todos, setTodos }) {
  const deleteTodoHandler = function () {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = function () {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-items ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        {todo.completed ? "redo" : "check"}
      </button>
      <button onClick={deleteTodoHandler} className="trash-btn">
        trash
      </button>
    </div>
  );
};

export default Todo;
