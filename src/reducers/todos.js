import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "./../constants/ActionTypes";
import { getLocalTodos, saveLocalTodos } from "./../utils/localStorage";

// TODO 使用特殊的 id 取代递增

const initialState = getLocalTodos();

const getTodoIndex = (state) => {
  return state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newState = [
        ...state,
        {
          id: getTodoIndex(state),
          completed: false,
          text: action.text,
        },
      ];
      saveLocalTodos(newState);
      return newState;
    }

    case DELETE_TODO: {
      const newState = state.filter(todo => todo.id !== action.id);
      saveLocalTodos(newState);
      return newState;
    }

    case COMPLETE_TODO: {
      const newState = state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      saveLocalTodos(newState);

      return newState;
    }

    default:
      return state;
  }
}
