import { combineReducers, createStore, interceptStoreWith }  from './state_manager'
import todos from './components/todos/reducer'
import visibilityFilter from './components/filter_visibility/reducer'

// let { combineReducers, createStore, interceptStoreWith } = StateManager

const reducer = combineReducers({
  todos,
  visibilityFilter
})

const logInterceptor = (store) => (dispatchDown) => (action) => {
  console.info('dispatching action:')
  console.log(action)
  console.info('the state is:')
  console.log(store.getState())
  let nextAction = dispatchDown(action)
  console.info('new state is:')
  console.log(store.getState())

  return nextAction
}

const PromiseInterceptor = (store) => (dispatchDown) => (action) => {
  if (typeof action.then !== 'function') {
    return dispatchDown(action)
  }

  // Implement the PromiseInterceptor, when the action is a Promise do something

}

const store = interceptStoreWith([
  logInterceptor,
  PromiseInterceptor
])(createStore(reducer))

export default store
