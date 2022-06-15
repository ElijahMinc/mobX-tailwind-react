import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from "mobx"

import './index.scss';
import App from './App';



class UsersState {
  usersArray = []
  count = 0

  constructor() {
    makeAutoObservable(this)
}
  async getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const json = await response.json()

    this.usersArray = json

  }

  setCheckedUser(user){
    this.usersArray = this.usersArray.map(currentUser => currentUser.id === user.id ? ({...currentUser, completed: !currentUser.completed}) : currentUser)
  }

  increment(){
    this.count += 1
  }

  decrement(){
    this.count -= 1
  }


  get users (){
    return this.usersArray
  }
}

export const usersState = new UsersState()

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
