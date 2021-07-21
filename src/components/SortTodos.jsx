import { Button } from '@material-ui/core';

const SortTodos = (props) => {
  const {setSortType} = props
  return <div>
    <Button variant="contained" onClick={() => setSortType('checked')}>Sort</Button>
  </div>
}


export default SortTodos