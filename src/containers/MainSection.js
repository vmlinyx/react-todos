import { connect } from "react-redux";
import { completeTodo } from "./../actions";
import TodoList from "./../components/TodoList";

const mapStateProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => ({
  completeTodo: (id) => dispatch(completeTodo(id)),
});

export default connect(mapStateProps, mapDispatchToProps)(TodoList);
