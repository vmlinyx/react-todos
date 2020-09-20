import React, { useState, useEffect } from "react";
import "./App.css";

import "antd/dist/antd.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State staff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Functions
  const filterHandler = function () {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = function () {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = function () {
    if (localStorage.getItem("todos") === null) {
      setTodos([]);
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // only run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  return (
    <div className="App">
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
