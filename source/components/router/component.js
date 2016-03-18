import Shaco from 'shadow-component'
import HistoryManager from './history_manager'
import store from '../../store'

let alreadyRender = false

let Router = Shaco.ComponentFactory({
  elementName: 'router-manager',
  template: `
  <content></content>
  `,
  onMount () {
    console.log('This is mount')
    this.watchRoute()
  },
  state: {},
  routes: [],
  defaultRoute: {},
  unMount () {
    this.history()
    window.onpopstate = function () {}
  },
  watchRoute () {
    this.routeVariable = {}
    window.onpopstate = (event) => {
      this.render(true)
    }
    this.history = HistoryManager.subscribe((e) => {
      this.render(true)
    })
  },
  getComponentForRoute () {
    var selectedRoute = this.routes.filter((route) => {
      return HistoryManager.match(route.pattern)
    })
    if (selectedRoute.length === 0) {
      selectedRoute = this.defaultRoute
    } else {
      selectedRoute = selectedRoute[0]
    }
    return selectedRoute
  },
  routerIs (pattern, paramsArray) {
    paramsArray = [
      ...paramsArray.slice(0,2),
      this.state,
      ...paramsArray.slice(2)
    ]
    if (pattern !== '*') {
      this.routes.push({pattern, paramsArray})
    } else {
      Object.assign(this.defaultRoute, { pattern, paramsArray })
    }
  },
  renderRouteComponent () {
    let selectedRoute = this.getComponentForRoute()
    selectedRoute.paramsArray[2] = this.state
    Shaco.createElement(...selectedRoute.paramsArray)
  },
  view () {
    var result = this.state.child.bind(this)()
    if (typeof result === 'function') {
      var result = result.bind(this)()
    }
    this.renderRouteComponent()
  }
})

export default Router
