import { Button, TextField, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStore } from '../store/state';

const TodoAddForm = observer(() => {
  const state = useStore()
  const [value, setValue] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    state.addTodo(value)
    setValue('') 
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
    }
  })

  const classes = useStyles()

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


