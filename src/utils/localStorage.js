export const getLocalTodos = () => {
  try {
    const serializedState = localStorage.getItem("TODO_STATE");
    if (serializedState === null) {
      return [
        {
          text: "TODO ITEM",
          completed: false,
          id: 0,
        },
        {
          text: "TODO ITEM",
          completed: true,
          id: 1,
        },
      ];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

export const saveLocalTodos = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("TODO_STATE", serializedState);
  } catch (err) {
    console.error(err);
  }
};
