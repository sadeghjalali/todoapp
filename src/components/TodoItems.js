import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { observer, inject } from "mobx-react";

class TodoItems extends Component {
  
  List = [];
  render() {
    if (this.props.todoStore.Listposition === 0) {
      this.List = this.props.todoStore.todos;
      console.log(this.List.length)
    
    }
    if (this.props.todoStore.Listposition === 1) {
      this.List = this.props.todoStore.todos.filter(a => a.completed === false);
    }
    if (this.props.todoStore.Listposition === 2) {
      this.List = this.props.todoStore.todos.filter(a => a.completed === true);
    }
    
    return (
      <section className="main">
        <ul className="todo-list">
          {
            this.List.map(todo => {
            return <TodoItem todo={todo} key={todo.id} />;
          })}
        </ul>
      </section>
    );
  }
}
export default inject("todoStore")(observer(TodoItems));
