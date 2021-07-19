import { Button, TextField } from "@material-ui/core"

const TodoEditable = (props) => {
  const {setValue, value} = props
  return (
    <form>
        <TextField 
          placeholder='Add todo'
          variant="outlined"
          onChange={setValue(event => event.target.value)}
          value={value}
          />
        <Button className='button' variant="contained" color="primary" type='submit'>Add</Button>
      </form>
  )
}

export default TodoEditable