import {observable,action,decorate} from 'mobx';

export default class TodoModel {
    store
    id 
    title
    completed
    
    constructor( store, title, completed, id) {
        this.title =title
        this.completed = completed
        this.id = id
        this.store = store
    }
    

    toggle(){
        this.completed = !this.completed
    }
}

decorate(TodoModel,{title:observable,completed:observable,toggle:action})

