import Shaco from 'shadow-component'
import store from './store'
import { filters } from './components/filter_visibility/store'
import TodoList from './components/todos/list.view'
import TodoForm from './components/todos/form.view'

const TodoApp = Shaco.ComponentFactory({
  elementName: 'todo-app',
  state: store.getState(),
  template: `
  <style>
    :host {
  font-family: Helvetica;
  max-width: 500px;
  margin: 0 auto;
  display: block;
  }
  </style>
  <content></content>`,
  view: function() {
    let statePlusHandlers = Object.assign({}, this.state, {
      toggleHandler (index) {
        store.dispatch({ type: "TOGGLE_TODO", index: index})
      },
      removeHandler (index)  {
        store.dispatch({ type: "REMOVE_TODO", index: index})
      }
    })
    Shaco.createElement('todo-form', null, {
      submitHandler(value) {
        store.dispatch({ type: "ADD_TODO", text: value })
      }
    })
    Shaco.createElement('todo-list', null, statePlusHandlers, {})
  }
})

const render = () => {
  Shaco.renderDOM('todo-app', document.getElementById('TodoApp'), store.getState())
}

render()

store.subscribe(render)
