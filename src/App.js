import { useRef, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoAddForm';
import TodoList from './components/TodoList';
import SortTodos from './components/SortTodos';
import { sortBy } from 'lodash';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  filter: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: '14px',
    padding: '12px',
    margin: '12px 16px 16px 0px',
    '&:hover': {
      backgroundColor: 'darkgreen'
    }
  },
  menu: {
    padding: '0px',
    margin: '0px',
    borderRadius: '10px',
    '& > div': {
      padding: '0px',
      backgroundColor: 'lightgreen',
      minHeight: '0px'
    },
  },
  menuItem: {
    padding: '8px',
    backgroundColor: 'lightgreen',
    '&:hover': {
      backgroundColor: 'green',
      color: 'white'
    }
  },
  search: {
    border: '1px solid lightgrey',
    borderRadius: '4px',
    padding: '4px 16px 4px 16px',
    margin: '0px 0px 0px 36px',
    fontSize: '18px',
    lineHeight: '100%',
    backgroundColor: 'lightgreen',
    '&:hover': {
      border: '1px solid darkgreen'
    },
  },
  input: {
    borderRadius: '4px',
    padding: '8px',
    fontSize: '18px',
    '& > div': {
      height: '40px',
      backgroundColor: 'white',
      border: 'none'
    },
    '& > input:hover': {
      backgroundColor: 'red'
    }
  },
  button: {
    width: '70px',
    padding: '8px',
    margin: '8px 16px',
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgreen'
    },
  },
  todos: {
    width: '800px',
    padding: '0px',
    margin: '0px',
    '& > div': {
      borderRadius: '4px',
      fontSize: '20px'
    },
    '& > div:hover': {
      backgroundColor: 'lightgreen',
      color: 'white',
    }
  },
  checkbox: {
    color: 'blue',
    '&:checked': {
      color: 'blue'
    }
  },
  todo: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    '&:hover': {
      backgroundColor: 'lightgreen'
    },
  },
  fabButton: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'darkgreen',
      color: 'white'
    }
  }


})

const App = () => {

  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')
  const [editedValue, setEditedValue] = useState('')
  const [editableIndex, setEditableIndex] = useState(null)
  const [sortType, setSortType] = useState(1)
  const todoId = useRef(0)
  let sortedTodos = [...todos]
  const classes = useStyles()
  let searchValue = ''
  
  switch(sortType) {
    case 'default':
      sortedTodos = [...todos]
      break;
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
    case 'search':
      sortedTodos = [ ...todos ]
        .filter(todo => !todo.value.includes(searchValue))
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
    editedValue ? newTodos[index].value = editedValue : newTodos[index].value = 'empty'
    setTodos(newTodos)
    toggleIsEditable(null)
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
  }
  const searchHandler = (value) => {
    searchValue = value
    setSortType('search')
    if(value === '' && sortType === 'search') {setSortType('default') }
  }

  return (   
    <div>
      <h1>Todo List</h1>
      <div className='TodoContainer'>
        <SortTodos 
          setSortType={setSortType}
          classes={classes} 
          searchHandler={searchHandler}
        /> 
        <TodoForm 
          saveTodo={saveTodo}
          addTodo={addTodo} 
          setValue={setValue}
          value={value}
          classes={classes}
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
          classes={classes}
        />
      </div>
     
    </div>
    
  )
}

export default App;
