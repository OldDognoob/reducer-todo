// import React, {useReducer} from 'react';
// import TodoList from './component/TodoList';
// import TodoForm from './component/TodoForm';

// import './App.css';

// import {initialState, todoReducer} from './reducers/todoReducers';

// function App() {
//   //set up the reducer state
//   const[state,dispatch] =useReducer(todoReducer, initialState)

//   const toggle = id => dispatch({ type: "TOGGLE_TODO", payload: id });


//   const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });


//   const markCompleted = id=> {
//     dispatch({ type:"MARK_COMPLETED", payload: id });
//   }
  
//   const clearCompleted = event => {
//     event.preventDefault();
//     dispatch({ type: "CLEAR_COMPLETED" });
//   } 
  


 
  
//   return (
//     <div className="todo">
//       <div className ="todo-body">
//       </div>
//       <TodoForm addTodo ={addTodo} clearCompleted={clearCompleted}/>
//       <TodoList todos={state.todos} toggle={toggle}/>
      
//     </div>
//   );
// }

// export default App;


import React, { useReducer } from 'react';
import './App.css';

import { initialState, todoReducer } from "./reducers/todoReducer";

import "./App.css";

import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = todo => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const clearCompleted = id => {
    dispatch({ type: 'CLEAR_COMPLETED', payload: id });
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList todos={state.todos} toggle={toggleTodo} />
    </div>
  );
}

export default App;
