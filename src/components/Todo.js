import React from 'react';

const Todo = function({text}) {
    return (
        <div className="todo">
            <li className="todo-items">{text}</li>
            <button className="complete-btn">check</button>
            <button className="trash-btn">trash</button>
        </div>
    );
}

export default Todo;