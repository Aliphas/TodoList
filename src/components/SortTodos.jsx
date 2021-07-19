import { Button } from '@material-ui/core';

const SortTodos = (props) => {
  const {setSortType, sort, sortType} = props

  const sortTypeHandler = (type) => {
    setSortType(type)
    sort(sortType)
  }

  return <div>
    <Button variant="contained" onClick={() => sortTypeHandler(1)}>Sort</Button>
  </div>
}


export default SortTodos