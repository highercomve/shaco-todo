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
    :host {
    display: block;
  padding-top: 3em;
  padding-bottom: 3em;
  }
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
  todoPlushandlers(todo, index) {
    return Object.assign({}, todo, {
      clickHandler: (e) =>  { this.state.toggleHandler(index) },
        removeHandler: () => { this.state.removeHandler(index) }
    })
  },
  view: function () {
    const { todos, visibilityFilter } = this.state
    const visibleTodos = filterTodos(todos, visibilityFilter)
    return (
      <ul>
        { visibleTodos.map((todo, index) => {
          return (
            <todo-item key={index} state={ this.todoPlushandlers(todo, index)}></todo-item>
          )
        })}
      </ul>
    )
  }
})

export default TodoList
