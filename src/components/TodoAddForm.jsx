import { Button, TextField } from '@material-ui/core';

const TodoAddForm = (props) => {
  const {addTodo, setValue, value} = props

  return (
    <div className='TodoForm'>
      <form onSubmit={addTodo}>
        <TextField 
          placeholder='Add todo'
          variant="outlined"
          onChange={event => setValue(event.target.value)} 
          value={value}
          />
        <Button className='button' variant="contained" color="primary" type='submit'>Add</Button>
      </form>
    </div>
  )
}
export default TodoAddForm