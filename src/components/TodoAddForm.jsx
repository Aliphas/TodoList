import { Button, TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStore } from '..';

const TodoAddForm = observer((props) => {
  const {classes} = props
  const state = useStore()
  const [value, setValue] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    state.addTodo(value)
    setValue('') 
  }

  return (
    <div className='TodoForm'>
      <form onSubmit={onSubmitHandler}>
        <TextField 
          className={classes.input}
          placeholder='Add todo'
          variant="outlined"
          onChange={event => setValue(event.target.value)} 
          value={value}
          />
        <Button className={classes.button} type='submit'>Add</Button> 
      </form>
    </div>
  )
})
export default TodoAddForm


