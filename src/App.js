import React from 'react'
import './App.css';
import TodoForm from './components/TodoAddForm';
import TodoList from './components/TodoList';
import SortTodos from './components/SortTodos';
import { observer } from 'mobx-react-lite';

const App = observer(() => {

  return (
    <div>
      <h1>Todo List</h1>
      <div className='TodoContainer'>
        <SortTodos />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
})

export default App
