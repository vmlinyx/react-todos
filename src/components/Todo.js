import React from "react";
import { Button } from "antd";
import { RedoOutlined, CheckOutlined, DeleteOutlined } from "@ant-design/icons";
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
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <span className="todo-items">{text}</span>
      <div className="action-btns">
        <Button
          shape="circle"
          type={todo.completed ? "dashed" : "primary"}
          icon={todo.completed ? <RedoOutlined /> : <CheckOutlined />}
          onClick={completeHandler}
          className="complete-btn"
        />
        <Button
          danger
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={deleteTodoHandler}
          className="trash-btn"
        />
      </div>
    </div>
  );
};

export default Todo;
