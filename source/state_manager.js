if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

function combineReducers (reducers) {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((reducerAcumulator, key) => {
      reducerAcumulator[key] = reducers[key](state[key], action)
      return reducerAcumulator
    }, {})
  }
}

function chainCompose (functionsArray) {
  return (...args) => {
    const functionsToCompose = functionsArray.slice(0,-1)
    const initialFunc = functionsArray.slice(-1)[0]
    return functionsToCompose.reduceRight((result, func) => {
      return func(result)
    }, initialFunc(...args))
  }
}

function interceptStoreWith (interceptors) {
  if (!Array.isArray(interceptors)) {
    interceptors = arguments
  }
  return (store) => {
    let dispatch = store.dispatch

    // Using the scope to past throw every interceptor function the scoped dispatch function
    let interceptorStoreAPI = {
      dispatch (action) { return dispatch(action) },
      getState: store.getState
    }
    let interceptorsChain = interceptors.map(interceptor => {
      return interceptor(interceptorStoreAPI)
    })

    // This change the dispatch function inside the actual scope. Therefore
    // The inner function inside every interceptor will execute the complete interceptor stack
    dispatch = chainCompose(interceptorsChain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
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
      listeners = listeners.filter(f => { f !== filter })
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

export {
  combineReducers,
  createStore,
  interceptStoreWith
}

