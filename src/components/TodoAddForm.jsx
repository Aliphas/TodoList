import { Button, TextField } from '@material-ui/core';

const TodoAddForm = (props) => {
  const {addTodo, setValue, value, classes} = props

  return (
    <div className='TodoForm'>
      <form onSubmit={addTodo}>
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
}
export default TodoAddForm