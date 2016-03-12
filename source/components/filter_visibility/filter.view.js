import Shaco from 'shadow-component'

const FilterBy = Shaco.ComponentFactory({
  elementName: 'filter-by',
  template: `
  <style>
    :host {
  display: table-cell;
  width: 1%;
  text-decoration: none;
  background-color: #ecf0f1;
  text-align: center;
  pointer: cursor;
  }
    ::content a {
    display: block;
  padding: 0.8em 0.4em;
  color: #333;
  cursor: pointer;
  }
    ::content a.active {
  background-color: #2980b9;
  color: white;
  }
  </style>
  <content></content>
  `,
  view: function() {
    Shaco.createElement('a', null, null, {
      onclick: this.state.filterHandler,
      class: (this.state.visibilityFilter === this.state.type) ? 'active': ''
    }, `${this.state.text}`)
  }
})

const FilterMenu = Shaco.ComponentFactory({
  elementName: 'filter-menu',
  template: `
  <style>
    ::content {
  display: table;
  width: 100%;
  }
  </style>
  <content></content>
  `,
  view: function() {
    this.state.filters.map((filter, index) => {
      let filterPlusHandler = Object.assign({}, filter, {
        visibilityFilter: this.state.visibilityFilter,
        filterHandler: () => {
          this.state.filterHandler(filter.type)
        }
      })
      Shaco.createElement('filter-by', null, filterPlusHandler, {})
    })
  }
})

export default FilterMenu
