import Shaco from 'shadow-component'
import store from './store'
import RouterManager from './components/router/component'
import TodoApp from './components/main/view'

const TodoContainer = Shaco.ComponentFactory({
  elementName: 'todo-container',
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
    Shaco.createElement('router-manager', null, this.state, {}, function() {
      // The second parameter is and array that will be past to Shaco.createElement. You don't add the state here
      // The State will be passed to all the components inside the router-manager
      this.routerIs('/', ['todo-app', null])
      this.routerIs('*', ['div', null, {}, 'Not Found'])
    })
  }
})

const render = () => {
  Shaco.renderDOM('todo-container', document.getElementById('TodoApp'), store.getState())
}

render()

store.subscribe(render)

function init () {
  console.log('Start')
}

window.addEventListener ? addEventListener("load", init, false) : window.attachEvent ? attachEvent("onload", init) : (onload = init);
