import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AddTodo.module.css";

const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState("添加任务");
  const [iconFont, setIconFont] = useState("➕");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputText.trim();
    save(text);
  };

  const handleBlur = () => {
    if (!inputText) {
      setInputText("添加任务");
      setIconFont("➕");
    }
  }

  const handleFocus = () => {
    setInputText("");
    setIconFont("🔘")
  }

  const save = (text) => {
    if (text.length !== 0) {
      addTodo(text);
      setInputText("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.AddTodo}>
        <div className={styles.icon}>{iconFont}</div>
        <input
          className={styles.input}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          value={inputText}
        />{" "}
        <button className={styles.button} type="submit">
          +
        </button>
      </form>
    </>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
