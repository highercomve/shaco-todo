import Shaco from 'shadow-component'
import store from '../../store'
import { filters } from '../filter_visibility/store'
import TodoList from '../todos/list.view'
import TodoForm from '../todos/form.view'
import FilterMenu from '../filter_visibility/filter.view'

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
  statePlusHandlers() {
    return Object.assign({}, this.state, {
      toggleHandler (index) {
        store.dispatch({ type: "TOGGLE_TODO", index: index})
      },
      removeHandler (index)  {
        store.dispatch({ type: "REMOVE_TODO", index: index})
      }
    })
  },
  submitHandlerFactory() {
    return {
      submitHandler(value) {
        store.dispatch({ type: "ADD_TODO", text: value })
      }
    }
  },
  filterMenuState() {
    return {
      visibilityFilter: this.state.visibilityFilter,
      filterHandler(filter) {
        store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: filter })
      },
      filters
    }
  },
  view: function() {
    Shaco.createElement('todo-form', null, this.submitHandlerFactory())
    Shaco.createElement('todo-list', null, this.statePlusHandlers())
    Shaco.createElement('filter-menu', null, this.filterMenuState())
  }
})

