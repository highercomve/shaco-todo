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
  margin-top: -0.3em;
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
  top: 50%;
  left: %5;
  width: 90%;
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
    let { text, clickHandler, removeHandler, completed } = this.state
    Shaco.createElement('li', null, null, {
      class: (completed) ? 'ready':'not-ready'
    }, () => {
      Shaco.createElement('span', null, null, {
        class: 'content',
        onclick: clickHandler
      }, `${text}`)
      Shaco.createElement('button', null, null, {
        class: 'todo-remove',
        onclick:  removeHandler
      }, '\u2612')
    })
  }
})

export default Todo
