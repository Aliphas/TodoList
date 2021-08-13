import React from 'react'
import './../App.css';
import { Button, Menu, MenuItem, InputBase } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useStore } from '..';

const SortTodos = observer((props) => {
  const {classes} = props
  const state = useStore()
  const [anchorElSort, setAnchorElSort] = React.useState(null);
  const [anchorElFilter, setAnchorElFilter] = React.useState(null);
  const handleClickMenuSort = (event) => setAnchorElSort(event.currentTarget)
  const handleClickMenuFilter = (event) => setAnchorElFilter(event.currentTarget)

  const handleCloseMenu = (type) => {
    setAnchorElSort(null)
    setAnchorElFilter(null)
    state.setSortType(type)
  }

  return <div className='filters'>
    <Button className={classes.filter} aria-controls="sort-menu" aria-haspopup="true" onClick={handleClickMenuSort}>Sort</Button>
    <Menu className={classes.menu}
      id="sort-menu"
      anchorEl={anchorElSort}
      keepMounted
      open={Boolean(anchorElSort)}
      onClose={handleCloseMenu}
    >
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('default')}>Default</MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('completed')}>Completed</MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('active')}>Active</MenuItem>
    </Menu>
    <Button className={classes.filter} aria-controls="filter-menu" aria-haspopup="true" onClick={handleClickMenuFilter}>Filter</Button>
    <Menu className={classes.menu}
      id="filter-menu"
      anchorEl={anchorElFilter}
      keepMounted
      open={Boolean(anchorElFilter)}
      onClose={handleCloseMenu}
    >
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('default')}>Default</MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('onlyCompleted')}>Only Completed</MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('onlyActive')}>Only Active</MenuItem>
    </Menu>
    <InputBase className={classes.search} variant="outlined" placeholder="Search…" onChange = {event => state.searchHandler(event.target.value)}></InputBase>
  </div>
})


export default SortTodos