import React from 'react'
import './../App.css';
import { Button, Menu, MenuItem, InputBase } from '@material-ui/core';

const SortTodos = (props) => {
  const {setSortType, classes, searchHandler} = props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickMenu = (event) => setAnchorEl(event.currentTarget)
  const handleCloseMenu = (type) => {
    setAnchorEl(null)
    setSortType(type)
  }
  return <div className='filters'>
    {/* <Button variant="contained" onClick={() => setSortType('completed')}>Completed</Button>
    <Button variant="contained" onClick={() => setSortType('active')}>Active</Button>
    <Button variant="contained" onClick={() => setSortType('onlyCompleted')}>Only Completed</Button>
    <Button variant="contained" onClick={() => setSortType('onlyActive')}>Only Active</Button> */}

    <Button className={classes.filter} aria-controls="sort-menu" aria-haspopup="true" onClick={handleClickMenu}>Sort</Button>
    <Menu className={classes.menu}
      id="sort-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
    >
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('default')}>Default</MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('completed')}>Completed</MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('active')}>Active</MenuItem>
    </Menu>
    <Button className={classes.filter} aria-controls="filter-menu" aria-haspopup="true" onClick={handleClickMenu}>Filter</Button>
    <Menu className={classes.menu}
      id="filter-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
    >
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('default')}>Default</MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('onlyCompleted')}>Completed</MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => handleCloseMenu('onlyActive')}>Active</MenuItem>
    </Menu>
    <InputBase className={classes.search} variant="outlined" placeholder="Search…" onChange = {event => searchHandler(event.target.value)}></InputBase>
  </div>
}


export default SortTodos