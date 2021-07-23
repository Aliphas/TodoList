import { Button } from '@material-ui/core';

const SortTodos = (props) => {
  const {setSortType} = props
  return <div>
    <Button variant="contained" onClick={() => setSortType('completed')}>Completed</Button>
    <Button variant="contained" onClick={() => setSortType('active')}>Active</Button>
    <Button variant="contained" onClick={() => setSortType('onlyCompleted')}>Only Completed</Button>
    <Button variant="contained" onClick={() => setSortType('onlyActive')}>Only Active</Button>
  </div>
}


export default SortTodos