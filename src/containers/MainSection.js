import { connect } from "react-redux";
import { completeTodo, deleteTodo } from "./../actions";
import TodoList from "./../components/TodoList";

const mapStateProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => ({
  completeTodo: (id) => dispatch(completeTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateProps, mapDispatchToProps)(TodoList);
