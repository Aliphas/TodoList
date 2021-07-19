import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, TextField, Fab  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const TodoList = (props) => {
  const {todos, deleteTodo, updateHandler, setEditedValue, toggleIsEditable, editableIndex, toggleCheckbox} = props
  
return (
    <List> 
      {todos.map((todo, index) => {  
        return (
          <ListItem key={index.toString()} dense button>
              {editableIndex === index ? 
                <form onSubmit={event => updateHandler(event, index)}>
                  <TextField
                    autoFocus
                    placeholder='Add todo'
                    variant="outlined"
                    onChange={event => setEditedValue(event.target.value)} 
                    //value={editedValue}
                  />
                  <Button variant="contained" color="primary" type='submit'>Confirm</Button>
                </form>
              :<> 
                  <Checkbox tabIndex={-1} onChange={event => event.target.checked = todo.checked} onClick={(event) => toggleCheckbox(event, index, todo.id.current, todo)}/>
                  <ListItemText 
                    primary={todo.value}
                  />       
                  <ListItemSecondaryAction>
                    <Fab aria-label="edit" size='small' onClick={ () => toggleIsEditable(index) }><EditIcon /></Fab>
                    <Fab aria-label="delete" size='small' onClick={ () => deleteTodo(index) }><DeleteIcon /></Fab>
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