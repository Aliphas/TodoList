import { toLower, uniqueId, sortBy } from 'lodash';
import { makeAutoObservable } from "mobx"

class State {
  todos = []
  editedValue = ''
  editableIndex = null
  sortType = 'default'
  searchValue = ''
  test = 0

  constructor() {
    makeAutoObservable(this)
  }
  get sortedTodos() { 
    let sortedTodos = this.todos
    switch(this.sortType) {
      case 'default':
        sortedTodos = this.todos
        break;
      case 'completed':
        sortedTodos = sortBy(this.todos, todo => !todo.checked)
        break;
      case 'active':
        sortedTodos = sortBy(this.todos, todo => todo.checked)
        break;
      case 'onlyActive':
        sortedTodos = this.todos
          .filter((todo, _) => todo.checked === false)
        break;
      case 'onlyCompleted':
        sortedTodos = this.todos
          .filter((todo, _) => todo.checked === true)
        break;
      case 'search':
        sortedTodos = this.todos
          .filter(todo => toLower(todo.value).includes(toLower(this.searchValue)))  
        break;
        default: sortedTodos = this.todos
    } 
    
    return sortedTodos
  }

  addTodo(value) {
    const trimmedText = value.trim()
    if (trimmedText.length > 0) {
      const todo = {}
      todo.value = trimmedText
      todo.id = uniqueId()
      todo.checked = false
      this.todos.push(todo)
    }
  }
  updateTodo(id, editedValue) {
    editedValue ? this.todos[id].value = editedValue : this.todos[id].value = 'empty'
    this.toggleIsEditable(null)
  }
  deleteTodo(todoIndex) {
    this.todos = this.todos.filter((_, index) => index !==todoIndex)
    this.editableIndex = null
  }
  checkboxHandler(todo) {
    const id = this.todos.findIndex(currentValue => currentValue.id === todo.id)
    this.todos[id].checked = !this.todos[id].checked
  }
  searchHandler(value) {
    this.searchValue = value
    this.sortType = 'search'
    if(value === '' && this.sortType === 'search') {this.sortType = 'default' }
  }
  setSortType(type) { this.sortType = type}

  toggleIsEditable(index) { this.editableIndex = index }




}

export default new State()