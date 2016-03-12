import Shaco from 'shadow-component'
import { filterTodos } from '../filter_visibility/store'
import Todo from './show.view'

const defaultTodosState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
}


const TodoList = Shaco.ComponentFactory({
  elementName: 'todo-list',
  state: defaultTodosState,
  template: `
  <style>
    ::content ul {
  list-style: none;
  margin: 1em 0;
  padding: 0;
  }

    ::content li:first-child {
  border-top: none;
  }

    ::content li:last-child {
  border-bottom: none;
  }
  h2 {
    padding: 0.1em 0;
    margin: 0.5em 0;
  }
  </style>
  <h2>My todo list</h2>
  <content></content>
  `,
  view: function () {
    const { todos, visibilityFilter } = this.state
    const visibleTodos = filterTodos(todos, visibilityFilter)
    Shaco.createElement('ul', null, null, {}, () => {
      visibleTodos.map((todo, index) => {
        let todoPlushandlers = Object.assign({}, todo, {
          clickHandler: (e) =>  { this.state.toggleHandler(index) },
          removeHandler: () => { this.state.removeHandler(index) }
        })
        Shaco.createElement('todo-item', index, todoPlushandlers)
      })
    })
  }
})

export default TodoList
