import Shaco from 'shadow-component'
import { HistoryManager } from 'shaco-router'

const defaultTodoState = {
  text: '',
  completed: false,
  clickHandler: function() {},
  removeHandler: function() {}
}

const Todo = Shaco.ComponentFactory({
  elementName: 'todo-item',
  state: defaultTodoState,
  template: `
  <style>
    ::content li .content,
      ::content li .todo-remove {
  float: left;
  display: block;
  }

    ::content li .content {
  width: 92%;
  }

    ::content li .todo-remove {
  background: none;
  color: #e74c3c;
  border: none;
  box-shadow: none;
  font-size: 2.2em;
  margin-top: -0.5em;
  line-height: 0.8em;
  width: 8%;
  float: right;
  position: relative;
  top: 0.2em;
  }

    ::content .ready {
  color: #999;
  position: relative;
  }

    ::content .ready:before {
  position: absolute;
  top: 48%;
  left: %5;
  width: 80%;
  display: block;
  border-bottom: 1px solid #999;
  content: "";
  }

    ::content .not-ready {
  text-decoration: none;
  }

    ::content li {
  background-color: #F3F3F3;
  padding: 1em;
  border-bottom: 1px solid #CCC;
  border-top: 1px solid #FFF;
  position: relative;
  }
    ::content li:before,
      ::content li:after {
  content: "";
  display: block;
  clear: both;
  }
  </style>
  <div class="todo-item">
  <content></content>
  </div>
  `,
  view () {
    let { id, text, toggleHandler, removeHandler, completed, child} = this.state
    return (
      <li class={(completed) ? 'ready':'not-ready'}>
        <span class="content" onclick={() => { toggleHandler(this.state.id) }}>
          { text } 
          <route-link state={{to: `/task/${this.state.id}`}}>
            (link)
          </route-link>
        </span>
        <button class="todo-remove" onclick={ () => { removeHandler(this.state.id) }}>
          {'\u2612'}
        </button>
      </li>
    )
  }
})

export default Todo
