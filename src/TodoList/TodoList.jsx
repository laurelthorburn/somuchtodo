import Todo from '../Todo/Todo';
import NewTodoListForm from '../NewTodoListForm/NewTodoListForm';
import React, {useState} from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // const handleSave = () => {
    //     setTodos()
    // }

    return ( 
        <>
        <h2>I am the todo list</h2>
        <h3>Fill out this form:</h3>
        <NewTodoListForm />
        <h3>All your todo's are here:</h3>
        {todos.map(todo => {return(
            <div>
                {todo}
            </div>
        )})}
        </>
     );
}
 
export default TodoList;