import { Button, TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import State from './../store/state'

const TodoAddForm = observer((props) => {
  const {setValue, value, classes} = props
  
  const onSubmitHandler = (event) => {
    event.preventDefault()
    State.addTodo(value)
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
      <button onClick={() => console.log(State.todos)}>state</button>
      <button onClick={() => console.log(State.test)}>test</button>
    </div>
  )
})
export default TodoAddForm