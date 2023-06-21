import React from 'react';
import TodoList from './components/TodoList';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Family To-Do List</h1>
      <TodoList />
    </div>
  );
};

export default App;
