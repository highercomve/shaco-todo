import Shaco from 'shadow-component'

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
  margin-top: -0.2em;
  line-height: 0.8em;
  width: 8%;
  float: right;
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
  view: function() {
    let { text, clickHandler, removeHandler, completed, child} = this.state
    return (
      <li class={(completed) ? 'ready':'not-ready'}>
        <span class="content" onclick={() => { clickHandler() }}>
          {text}
        </span>
        <button class="todo-remove" onclick={ () => { removeHandler() }}>
          {'\u2612'}
        </button>
      </li>
    )
  }
})

export default Todo
