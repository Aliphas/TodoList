import React from 'react'
import './App.css';
import TodoForm from './components/TodoAddForm';
import TodoList from './components/TodoList';
import SortTodos from './components/SortTodos';
import { makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

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

const App = observer(() => {
  
  const classes = useStyles()
  return (
    <div>
      <h1>Todo List</h1>
      <div className='TodoContainer'>
        <SortTodos
          classes={classes}
        />
        <TodoForm
          classes={classes}
        />
        <TodoList
          classes={classes}
        />
      </div>
    </div>
  )
})

export default App
