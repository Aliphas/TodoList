import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, TextField, Fab  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStore } from '..';

const TodoList = observer((props) => {
  const state = useStore()
  const {classes} = props
  const [editedValue, setEditedValue] = useState('')
  
  const updateHandler = (event, id) => {
    event.preventDefault()
    state.updateTodo(id, editedValue)
  }

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