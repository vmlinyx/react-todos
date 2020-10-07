import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AddTodo.module.css";

const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputText.trim();
    save(text);
  };

  const save = (text) => {
    if (text.length !== 0) {
      addTodo(text);
      setInputText("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.AddTodo}>
        <input
          className={styles.input}
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
