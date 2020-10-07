import { connect } from "react-redux";
import { addTodo } from "./../actions";
import AddTodo from "./../components/AddTodo";

export default connect(null, { addTodo })(AddTodo);
