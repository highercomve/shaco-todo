import StateManager from './state_manager'
import todos from './components/todos/store'
import visibilityFilter from './components/filter_visibility/store'

let { combineReducers, createStore } = StateManager

const reducer = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(reducer)

export default store
