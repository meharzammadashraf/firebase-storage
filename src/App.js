import React , { Component } from "react";
import './App.css';
import Storage from './component/storage';
import TodosContextProvider from './contexts/TodosContext'
function App() {
  return (

    <TodosContextProvider>
    <div className="App">
      <Storage />
    </div>
    </TodosContextProvider>
  );
}

export default App;
