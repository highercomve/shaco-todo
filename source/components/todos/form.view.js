import Shaco from 'shadow-component'

const TodoForm = Shaco.ComponentFactory({
  elementName: 'todo-form',
  state: {
    text: '',
    submitHandler: function() {},
    errors: []
  },
  template: `
  <style>
    :host {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0em 0;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.5);
    z-index: 100;
    background-color: white;
  }

    ::content form {
    max-width: 500px;
    margin: 0 auto;
  }
  ::content form:before,
  ::content form:after {
  display: block;
  content: "";
  clear: both;
  }

  ::content input,
  ::content button {
  display: block;
  padding: 1em;
  border: none;
  background: none;
  float: left;
  font-size: 1.1em;
  box-sizing: border-box;
  }

  ::content input {
  background-color: white;
  box-shadow: 0 0 1px 0 #777;
  width: 70%;
  }

  ::content button {
  width: 30%;
  float: right;
  background-color: #1cc9a8;
  color: white;
  box-shadow: 0 0 1px 0 #16a085;
  }

    ::content .error {
  padding: 0.8em 0.5em;
  font-size: 0.9em;
  color: red;
  }
  </style>
  <content></content>
  `,
  submitHandler (e) {
    e.preventDefault()
    if (e.target[0].value !== '') {
      this.state.submitHandler(e.target[0].value)
      // Remove errors and render again
      this.setState({
        ...this.state,
        errors: []
      }, true) // this true to patch the component
    } else {
      this.setState({
        ...this.state,
        errors: ['You must write a Task']
      }, true) // for patch the element
    }
    e.target[0].value = ''
  },
  view: function() {
    // Using just Shaco.createElement
    Shaco.createElement('form', null, null, {
      onsubmit: this.submitHandler.bind(this)
    }, () => {
      Shaco.createElement('input', null, null, {
        type: 'text',
        placeholder: 'What you have to do?'
      }),
      Shaco.createElement('button', null, null, {
        type: 'submit'
      }, 'Add todo')
    })
    if (this.state.errors.length > 0) {
      this.state.errors.map((error, index) => {
        Shaco.createElement('div', index, {}, { class: 'error'}, `${error}`)
      })
    }
  }
})

export default TodoForm
