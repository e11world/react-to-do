import React from "react";

const Form = ( { setInputText, todos, setTodos, inputText, setStatus }) => {

    // js functions

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault(); // prevents default behavior (on button to not refresh - link it with onclick to the btn)
        setTodos([
            // if i have some to do's already, just pass it with ...
            // use a package for ID for real applications unique ID but for tut purpose, using math.random is fine
            ...todos, 
            { text: inputText, completed: false, id: Math.ceil(Math.random() * 1000).toFixed(0)}
        ]);
        //reset box after clicking submit
        setInputText("");
    };

    const statusHandler = (e) => {
        // console.log(e.target.value);
        setStatus(e.target.value);

    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;