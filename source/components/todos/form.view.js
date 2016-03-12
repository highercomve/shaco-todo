import Shaco from 'shadow-component'

const TodoForm = Shaco.ComponentFactory({
  elementName: 'todo-form',
  state: {
    text: '',
    submitHandler: function() {}
  },
  template: `
  <style>
  ::content form:before,
  ::content form:after {
  display: block;
  content: "";
  clear: both;
  }

  ::content input,
  ::content button {
  display: block;
  padding: 0.6em;
  border: none;
  background: none;
  float: left;
  box-sizing: border-box;
  }

  ::content input {
  background-color: white;
  box-shadow: 0 0 1px 0 #777;
  width: 70%;
  }

  ::content button {
  width: 30%;
  background-color: #1cc9a8;
  color: white;
  box-shadow: 0 0 1px 0 #16a085;
  }
  </style>
  <content></content>
  `,
  submitHandler (e) {
    e.preventDefault()
    console.log(e.target[0])
    this.state.submitHandler(e.target[0].value)
  },
  view: function() {
    Shaco.createElement('form', null, null, {
      onsubmit: this.submitHandler.bind(this)
    }, () => {
      Shaco.createElement('input', null, null, {
        type: 'text',
        ref: (node) => { console.log(node) }
      }),
      Shaco.createElement('button', null, null, {
        type: 'submit'
      }, 'Add todo')
    })
  }
})

export default TodoForm
