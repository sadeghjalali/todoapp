import React, { Component } from 'react';
import './App.css';
import {observer,inject} from 'mobx-react';
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import TodoMenu from './components/TodoMenu'

class App extends Component {
  render() {
    return (
      <div className="todoapp" id="todoapp">
        <TodoEntry/>
        <TodoItems/>
        <TodoMenu />
      </div>
    );
  }
}

export default inject('todoStore')(observer(App));
