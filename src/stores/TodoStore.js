import {observable,action,decorate} from 'mobx';
import TodoModel from './TodoModel';

class TodoStore {
    todos =[]
    lastID = 0
    Listposition = 0
    numOfItems = 0
    
    addTodo(title){
        this.todos.push(new TodoModel(this ,title , false, this.lastID ++))
    }
    removeTodo(ID){
        this.todos = this.todos.filter(a => a.id !== ID)
    }
    removeAllCompletedTodo(){
        this.todos = this.todos.filter(a => a.completed !== true)
    }
    items(num){
        this.numOfItems = num ;
    }
}

decorate(TodoStore,{numOfItems:observable,Listposition:observable,todos:observable,completed:observable,addTodo:action,removeTodo:action,removeAllCompletedTodo:action})

const todoStore = new TodoStore()

export default todoStore