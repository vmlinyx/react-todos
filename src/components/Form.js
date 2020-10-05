import React from "react";
import "./../App.css";

import { Select, Input, Button } from "antd";
const Form = function ({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
}) {
  const inputTextHandler = function (e) {
    setInputText(e.target.value);
  };
  const submitTodoHandler = function (e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: parseInt(Math.random() * 1000) },
    ]);
    setInputText("");
  };
  const statusHandler = function (value) {
    setStatus(value);
  };
  const { Option } = Select;

  return (
    <div className="todo-form">
      <Input
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
      />
      <Button
        type="primary"
        onClick={submitTodoHandler}
        className="submit-button"
      >
        Submit
      </Button>

      <div className="todo-select">
        <Select
          defaultValue="all"
          onChange={statusHandler}
          style={{ width: 120 }}
          className="filter-todo"
        >
          <Option value="all">All</Option>
          <Option value="completed">Completed</Option>
          <Option value="uncompleted">Uncompleted</Option>
        </Select>
      </div>
    </div>
  );
};

export default Form;
