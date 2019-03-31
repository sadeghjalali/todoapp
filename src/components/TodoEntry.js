import React, { Component } from "react";
import {observer,inject} from 'mobx-react';

class TodoEntry extends Component {
  state = {
    value: ''
  }
  handleKeyDown= event =>{
    if(event.keyCode!==13){
      return;
    }
    event.preventDefault()
    this.props.todoStore.addTodo(this.state.value)
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <input
          value={this.state.value}
          onChange={event=>this.setState({value: event.target.value})}
          onKeyDown={
            event=> this.handleKeyDown(event)
          }
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
export default inject('todoStore')(observer(TodoEntry));

