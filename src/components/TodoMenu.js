import React, { Component } from "react";
import {observer,inject} from 'mobx-react';


class TodoMenu extends Component {
    constructor(props) {
        super(props);
        
          this.changeListA = this.changeListA.bind(this);
          this.changeListT = this.changeListT.bind(this);
          this.changeListD = this.changeListD.bind(this);
          this.ClearC = this.ClearC.bind(this);
      }
    changeListA(){
        this.props.todoStore.Listposition = 0;
    }
    changeListT(){
        this.props.todoStore.Listposition = 1;
    }
    changeListD(){
        this.props.todoStore.Listposition = 2;
    }
    ClearC(){
        this.props.todoStore.removeAllCompletedTodo();
    }
    List=[]
  render() {
    this.List = this.props.todoStore.todos.filter(a => a.completed === false);
      
    return (
        
          <div className="Menu">
            <div className="lengthItems">{` ${this.List.length} items left`}</div>
            <button onClick = {this.changeListA} className="BTall">All</button>
            <button onClick = {this.changeListT} className="BTtodo">Todo</button>
            <button onClick = {this.changeListD} className="BTdone">Done</button>
            <button onClick = {this.ClearC} className="BTclear">erase completed item</button>
          </div>
        
    );
  }
}
export default inject('todoStore')(observer(TodoMenu));
