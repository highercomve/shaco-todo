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
    return (
      <a class={(this.state.visibilityFilter === this.state.type) ? 'active': ''}
        onclick={this.state.filterHandler}>
        {this.state.text}
      </a>
    )
  }
})

const FilterMenu = Shaco.ComponentFactory({
  elementName: 'filter-menu',
  template: `
  <style>
    ::content .table-justify {
  display: table;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  }
  </style>
  <content></content>
  `,
  filterPlusHandler(filter) {
    return Object.assign({}, filter, {
      visibilityFilter: this.state.visibilityFilter,
      filterHandler: () => {
        this.state.filterHandler(filter.type)
      }
    })
  },
  view: function() {
    return (
      <div class="table-justify">
        { this.state.filters.map((filter, index) => {
          return (
            <filter-by state={this.filterPlusHandler(filter)}></filter-by>
            )
        })}
      </div>
    )
  }
})

export default FilterMenu
