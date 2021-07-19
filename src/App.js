import { useRef, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoAddForm';
import TodoList from './components/TodoList';
import SortTodos from './components/SortTodos';
import { sortBy } from 'lodash';

const App = () => {

  const [todos, setTodos] = useState([])
  const [checkboxes, setCheckboxes] = useState([])
  const [value, setValue] = useState('')
  const [editedValue, setEditedValue] = useState('')
  const [editableIndex, setEditableIndex] = useState(null)
  const [sortType, setSortType] = useState(1)
  const todoId = useRef(0)

  const saveTodo = (todoText) => {
    const trimmedText = todoText.trim()
    if (trimmedText.length > 0) {
      const todo = {}
      todo.value = trimmedText
      todo.id = todoId
      todoId.current++
      setTodos([...todos, todo])
    }
  }
  const addTodo = (event) => {
    event.preventDefault()
    saveTodo(value)
    setValue('') 
    
  }
  const updateTodo = (index) => {
    const newTodos = todos
    newTodos[index] = editedValue
    setTodos(newTodos)
    toggleIsEditable(null)
  }
  const updateHandler = (event, index) => {
    event.preventDefault()
    updateTodo(index)
  }
  const deleteTodo = (todoIndex) => {
    const newTodos = todos
      .filter((_, index) => index !==todoIndex)
    setTodos(newTodos)
    toggleIsEditable(null)
    todoId.current--
  }

  const toggleIsEditable = (index) => { setEditableIndex(index) }

  const toggleCheckbox = (event, index, todoIdCurrent, todo) => {
    const newTodos = todos
    todo.checked = !todo.checked
     setTodos(newTodos)
     console.log(todo)
  }
 
  const sort = (sortType) => { 
    let newTodos = todos
    newTodos = sortBy(newTodos, todo => todo.checked)
    setTodos(newTodos)
  }

  return (   
    <div>
      <h1>Todo List</h1>
      <div className='TodoContainer'>
        <SortTodos 
          setSortType={setSortType}
          sort={sort}
          sortType={sortType}
        />
        <TodoForm 
          saveTodo={saveTodo}
          addTodo={addTodo} 
          setValue={setValue}
          value={value}
        />
        <TodoList 
          sort={sort}
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          updateHandler={updateHandler}
          setValue={setValue}
          setEditedValue={setEditedValue}
          editedValue={editedValue}
          toggleIsEditable={toggleIsEditable}
          setEditableIndex={setEditableIndex}
          editableIndex={editableIndex}
          toggleCheckbox={toggleCheckbox}
          checkboxes={checkboxes}
        />
      </div>
     
    </div>
    
  )
}

export default App;
