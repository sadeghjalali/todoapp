import React, { Component } from "react";
import {observer,inject} from 'mobx-react';

class TodoItem extends Component {
    onToggle=()=>{
        this.props.todo.toggle()
        console.log(this.props.todo.id)
    }
    closeLable=()=>{
        this.props.todoStore.removeTodo(this.props.todo.id)
    }
  render() {
      const { todo } = this.props
    return (
        
          <li  className={todo.completed ? 'completed' : ''}>
            <div className="view">
              <input
                onChange={this.onToggle}
                type="checkbox"
                className="toggle" 
                value="on" 
                checked={todo.completed}/>
              <label>{todo.title}</label>
              <button onClick={this.closeLable} id={todo.id}  className="destry">Cancel</button>
            </div>
          </li>
        
    );
  }
}
export default inject('todoStore')(observer(TodoItem));
