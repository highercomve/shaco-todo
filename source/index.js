import Shaco from 'shadow-component'
import { RouterManager } from 'shaco-router'
import store from './store'
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
  view: function () {
    /*
     * RouteManager: will allow render one component depending the URL in the browser.
     *
     * the routeIs function receive to params:
     * Fist the pattern to match the URL:
     *    This could be something like:
     *    "/" -> the index
     *    "/tasks"
     *    "/tasks/:id"
     *    ".*" -> the rest
     * The second parameter is and array that will be past to Shaco.createElement. You don't add the state here
     * The State will be passed to all the components inside the router-manager
     * You can use router-manager using JSX like before or using javascript functions, like this:
     *
     */
    // Shaco.createElement('route-manager', null, this.state, {}, () => {
    //   Shaco.createElement('route-selector', null, { pattern: '/', params: ['todo-app', null]} )
    //   Shaco.createElement('route-selector', null, { pattern: '.*', params: ['div', null, {}, "Not found"]} )
    // })

    return (
      <route-manager state={this.state}>
        <route-selector state={{ pattern: '/', params: ['todo-app', null] }}></route-selector>
        <route-selector state={{ pattern: '.*', params: ['div', null, {}, "Not found"]}}></route-selector>
      </route-manager>
    )
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
