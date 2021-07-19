import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const TodoTask = (props) => {
  const {todo, deleteTodo, index} = props
  const [isEditable, setIsEditable] = useState('false')
  const[editedValue, setEditedValue] = useState('')

  const editableHandler = (event) => {  
    event.preventDefault()
    setIsEditable(!isEditable)
    console.log(editedValue)
    
  }
  return (
    <div>
      {isEditable ? 
        <>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText 
            primary={todo}
          />
                
        <ListItemSecondaryAction><Button value='Edit' onClick={setIsEditable(!isEditable)} >Edit</Button>
          <IconButton
            aria-label='Delete'
            onClick={() => { deleteTodo(index) }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>
      : <form onSubmit={event => editableHandler(event)}>
          <TextField
            placeholder='Add todo'
            variant="outlined"
            onChange={event => setEditedValue(event.target.value)} 
            value={editedValue}
          >adwadaw</TextField>
          <Button className='button' variant="contained" color="primary" type='submit'>Confirm</Button>
        </form>
      }
    </div>
  )
  
        
          
}
export default TodoTask