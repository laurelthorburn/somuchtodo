import Todo from '../Todo/Todo';
import NewTodoListForm from '../NewTodoListForm/NewTodoListForm';


const TodoList = () => {
    return ( 
        <>
        <h2>I am the todo list</h2>
        <NewTodoListForm />
        <Todo />
        </>
     );
}
 
export default TodoList;