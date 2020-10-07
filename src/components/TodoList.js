import React from "react";
// import { List } from "antd";
import Todo from "./Todo";

// const TodoList = function ({ todos, setTodos, filteredTodos }) {
//   return (
//     <div className="todo-container">
//       <List className="todo-list" itemLayout="horizontal">
//         {filteredTodos.map((todo) => (
//           <Todo
//             setTodos={setTodos}
//             todos={todos}
//             todo={todo}
//             key={todo.id}
//             text={todo.text}
//           />
//         ))}
//       </List>
//     </div>
//   );
// };

const TodoList = function ({ todos, completeTodo }) {
  const completedTodos = todos.filter((todo) => todo.completed);
  const activeTodos = todos.filter((todo) => !todo.completed);

  const completedTodosDOM = completedTodos.length !== 0 && (
    <>
      <h3>已完成</h3>
      <ul>
        {completedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />
        ))}
      </ul>
    </>
  );

  return (
    <div>
      <ul>
        {activeTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />
        ))}
      </ul>
      {completedTodosDOM}
    </div>
  );
};

export default TodoList;
