import React from "react";

// Import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {/* <Todo /> */}
                {/* {todos.map(todo => ( */}
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        text={todo.text} 
                        // display to do's here
                        todo={todo}

                        // display filtered to do's
                        filteredTodos={filteredTodos}

                        key={todo.id}
                    />
                ))}
            </ul>
        </div>

    );
}

export default TodoList;