import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Assets/css/default.min.css';

// useState - a Hook that allows you to have state variables in functional components
// useEffect - run a function everytime a piece of state changes

// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {


  // Use State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  // run once when the app starts

  useEffect(() => {
    getLocalTodos();
    // the second argument is an empty array which means only run once when component is rendered - uses []
    //inserting something in there means run that function
  }, []);


  // Use Effect (must be after useStates if using that in last argument)
  useEffect(() => {
    // console.log('hey useEffect on run only once');
    filterHandler();
    saveLocalTodos();
  },[todos, status]);


  // Functions (if used only once inside useEffect, then add it inside that to get rid of warning/error but not necessary)
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        // so it doesn't continue on
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default: 
          setFilteredTodos(todos);
          break;
    }
  };


  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // 
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Eddie's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
