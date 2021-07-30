import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, TextField, Fab  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const TodoList = (props) => {
  const {todos, deleteTodo, updateHandler, setEditedValue, toggleIsEditable, editableIndex, checkboxHandler, classes} = props
  
return (
    <List className={classes.todos}> 
      {todos.map((todo, index) => {  
        return (
          <ListItem key={todo.id} dense button>
              {editableIndex === index ? 
                <form onSubmit={event => updateHandler(event, index)}>
                  <TextField
                    //className={{input: classes.input}}
                    className={classes.input}
                    autoFocus
                    placeholder='Add todo'
                    variant="outlined"
                    onChange={event => setEditedValue(event.target.value)} 
                    defaultValue={todo.value}
                    //value={editedValue}
                  />
                  <Button className={classes.button} variant="contained" color="primary" type='submit'>Confirm</Button>
                </form>
              :<> 
                  <Checkbox //className={classes.checkbox}
                    style={{color:'green'}} 
                    checked={todo.checked} 
                    tabIndex={-1} 
                    onChange={(event) => checkboxHandler(event, todo)} />
                  <ListItemText primary={todo.value} />       
                  <ListItemSecondaryAction>
                    <Fab className={classes.fabButton} aria-label="edit" size='small' onClick={ () => toggleIsEditable(index) }><EditIcon /></Fab>
                    <Fab className={classes.fabButton} aria-label="delete" size='small' onClick={ () => deleteTodo(index) }><DeleteIcon /></Fab>
                  </ListItemSecondaryAction>
                </>
              }
            </ListItem>
          )
      })}
    </List>
  )
};


export default TodoList