import React from "react";

const Form = function({ inputText, setInputText, todos, setTodos }) {
    const inputTextHandler = function(e) {
        setInputText(e.target.value);
    };
    const submitTodoHandler = function(e) {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: parseInt(Math.random() * 1000) }
        ]);
        setInputText("");
    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">Submit</button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompletd">Uncompletd</option>
                </select>
            </div>
        </form>
    );
};

export default Form;