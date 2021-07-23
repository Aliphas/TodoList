import { useRef, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoAddForm';
import TodoList from './components/TodoList';
import SortTodos from './components/SortTodos';
import { sortBy } from 'lodash';

const App = () => {

  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')
  const [editedValue, setEditedValue] = useState('')
  const [editableIndex, setEditableIndex] = useState(null)
  const [sortType, setSortType] = useState(1)
  const todoId = useRef(0)
  let sortedTodos = [...todos]
  
  switch(sortType) {
    case 'completed':
      sortedTodos = sortBy(todos, todo => !todo.checked)
      break;
    case 'active':
      sortedTodos = sortBy(todos, todo => todo.checked)
      break;
    case 'onlyActive':
      sortedTodos = [ ...todos ]
        .filter((todo, _) => todo.checked === false)
      break;
    case 'onlyCompleted':
      sortedTodos = [ ...todos ]
        .filter((todo, _) => todo.checked === true)
      break;
      default: sortedTodos = [...todos]
  }

  const saveTodo = (todoText) => {
    const trimmedText = todoText.trim()
    if (trimmedText.length > 0) {
      const todo = {}
      todo.value = trimmedText
      todo.id = todoId.current
      todoId.current++
      todo.checked = false
      setTodos([...todos, todo])
    }
  }

  const addTodo = (event) => {
    event.preventDefault()
    saveTodo(value)
    setValue('') 
  }
  const updateTodo = (index) => {
    const newTodos = [ ...todos ]
    newTodos[index].value = editedValue
    setTodos(newTodos)
    toggleIsEditable(null)
    console.log(todos[index])
  }
  const updateHandler = (event, index) => {
    event.preventDefault()
    updateTodo(index)
  }
  const deleteTodo = (todoIndex) => {
    const newTodos = [ ...todos ]
      .filter((_, index) => index !==todoIndex)
    setTodos(newTodos)
    toggleIsEditable(null)
  }
  const toggleIsEditable = (index) => { setEditableIndex(index) }

  const checkboxHandler = (event, todo) => {
    const id = todos.findIndex(currentValue => currentValue.id === todo.id)
    const newTodos = [ ...todos ]
    newTodos[id].checked = event.target.checked
    setTodos(newTodos)
    console.log(todo)
  }

  return (   
    <div>
      <h1>Todo List</h1>
      <div className='TodoContainer'>
        <SortTodos setSortType={setSortType} />
        <TodoForm 
          saveTodo={saveTodo}
          addTodo={addTodo} 
          setValue={setValue}
          value={value}
        />
        <TodoList 
          todos={sortedTodos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          updateHandler={updateHandler}
          setValue={setValue}
          setEditedValue={setEditedValue}
          editedValue={editedValue}
          toggleIsEditable={toggleIsEditable}
          setEditableIndex={setEditableIndex}
          editableIndex={editableIndex}
          checkboxHandler={checkboxHandler}
        />
      </div>
     
    </div>
    
  )
}

export default App;
