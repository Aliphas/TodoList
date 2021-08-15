import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, TextField, Fab, makeStyles  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStore } from '../store/state';

const TodoList = observer(() => {
  const state = useStore()
  const [editedValue, setEditedValue] = useState('')
  
  const updateHandler = (event, id) => {
    event.preventDefault()
    state.updateTodo(id, editedValue)
  }

  const useStyles = makeStyles({
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
  const classes = useStyles()
  return (
    <List className={classes.todos}> 
      {state.sortedTodos.map((todo, index) => {  
        return (
          <ListItem key={todo.id} dense button>
              {state.editableIndex === index ? 
                <form onSubmit={event => updateHandler(event, todo.id)}>
                  <TextField
                    className={classes.input}
                    autoFocus
                    placeholder='Add todo'
                    variant="outlined"
                    onChange={event => setEditedValue(event.target.value)} 
                    defaultValue={todo.value}
                  />
                  <Button className={classes.button} variant="contained" color="primary" type='submit'>Confirm</Button>
                </form>
              :<> 
                  <Checkbox
                    style={{color:'green'}} 
                    checked={todo.checked} 
                    tabIndex={-1} 
                    onClick={() => state.checkboxHandler(todo)} />
                  <ListItemText primary={todo.value} />       
                  <ListItemSecondaryAction>
                    <Fab className={classes.fabButton} aria-label="edit" size='small' onClick={ () => state.toggleIsEditable(index) }><EditIcon /></Fab>
                    <Fab className={classes.fabButton} aria-label="delete" size='small' onClick={ () => state.deleteTodo(index) }><DeleteIcon /></Fab>
                  </ListItemSecondaryAction>
                </>
              }
            </ListItem>
          )
      })}
    </List>
  )
})


export default TodoList