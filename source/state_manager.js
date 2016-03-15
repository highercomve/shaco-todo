
function combineReducers (reducers) {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((reducerAcumulator, key) => {
      reducerAcumulator[key] = reducers[key](state[key], action)
      return reducerAcumulator
    }, {})
  }
}

function createStore (reducer) {
  let state
  let isBusy = false
  let listeners = []

  const dispatch = (action) => {
    mustNotBeTypeOf(action.type, 'undefined', 'Every action must have a type property')
    if (isBusy) {
      throw new Error('Reducer is busy')
    }
    try {
      isBusy = true
      state = reducer(state, action)
    } finally {
      isBusy = false
    }

    listeners.forEach((listener) => {
      listener()
    })

    return action
  }

  const subscribe = (listener) => {
    mustBeTypeOf(listener, 'function', 'Listener must be a function')
    listeners.push(listener)
    return () => {
      listeners.filter(f => { f !== filter })
    }
  }

  const getState = () => { return state }

  const replaceReducer = (newReducer) => {
    mustBeTypeOf(newReducer, 'function', 'Reducer must be a function')
    reducer = newReducer
  }

  dispatch({ type: 'INIT'})

  return {
    dispatch,
    getState,
    replaceReducer,
    subscribe
  }
}

function mustBeTypeOf (obj, mustBe, message) {
  if ( typeof obj !== mustBe ) {
    throw new Error(message)
  }
}

function mustNotBeTypeOf (obj, mustBe, message) {
  if ( typeof obj === mustBe ) {
    throw new Error(message)
  }

}

export default {
  combineReducers,
  createStore
}

