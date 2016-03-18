const historyManager = history
let listeners = []

// Private Functions
function ifNotEmpty (variable) {
  return typeof variable !== 'undefined' && variable !== null && variable !== '' && typeof variable === 'string'
}

function extractQuery (url) {
  return url.slice(1).split('&').reduce((result, query, index) => {
    let [variable, value] = query.split('=')
    if  (ifNotEmpty(variable)) {
      result[variable] = value
    }
    return result
  }, {})
}

function extractVariables (url, pattern) {
  let regPattern = getPattern(pattern)
  let matchedUrl = url.match(regPattern) || []
  let patternVariables = getVariables(pattern)

  return matchedUrl.slice(1).reduce((result, match, index) => {
    result[patternVariables[index]] = match
    return result
  }, {})
}

function getPattern (patternString) {
  let pattern = patternString.replace(/\:[a-zA-z0-9]*/g, `([a-zA-Z0-9]*)`) + '(?=\\?|$)'
  return new RegExp(pattern, 'i')
}

function getVariables (pattern) {
  let matches = pattern.match(/\:([a-zA-Z0-9]*)/g) || []
  return matches.map(match => { return match.replace(/\:/, '') })
}

// Public Functions
function match (pattern, url = window.location) {
  let result = url.href.match(getPattern(pattern))
  return result !== null
}

function processUrl (pattern, url = window.location) {
  return {
    ...extractQuery(url.search),
    ...extractVariables (url.href, pattern)
  }
}

function callListeners () {
  listeners.map(listener => { listener() })
}

function push (url, state = {}, title = '') {
  historyManager.pushState(state, title, url)
  callListeners()
}

function go (n = -1) {
  historyManager.go(n)
  callListeners()
}

function back () {
  historyManager.back()
  callListeners()
}

function forward () {
  historyManager.forward()
  callListeners()
}

function subscribe (listener) {
  listeners.push(listener)

  return () => {
    listeners = listeners.filter(f => { return f !== listener })
  }
}

export default {
  go,
  push,
  back,
  forward,
  processUrl,
  subscribe,
  match
}
