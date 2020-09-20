import React from "react";
import { List } from "antd";
import Todo from "./Todo";

const TodoList = function ({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <List className="todo-list" itemLayout="horizontal">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
