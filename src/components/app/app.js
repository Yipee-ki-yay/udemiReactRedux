import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: "1" },
      { label: 'Make Awesome App', important: true, id: "2" },
      { label: 'Have a lunch', important: true, id: "3" },
    ],
  }

  deleteItem = (id) => {
    console.log(id);

    this.setState(({ todoData }) => {

      const idx = todoData.findIndex((el) => el.id === id);
      // todoData.splice(idx, 1); // нельзя изменять существующий стейт!! // don't change existing  state!! 

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArray = [...before, ...after];

      return {
        todoData: newArray,
      }

    });
  } 

  addItem = (text) => {
    // console.log(text);
    let item = {
      label: text, 
      important: false, 
      id: this.state.todoData.length + 1,
    }

    this.setState(({ todoData }) => {      
      console.log(item);
      // return todoData.push(item); //Нельзя менять существующий массив!!

      const newArray = [
        ...todoData,
        item
      ]

      return {
        todoData: newArray,
      }
    });
  }

  render() {

    return (
      <div className="todo-app container">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={ this.deleteItem }
        />
        <ItemAddForm onAddItem={ this.addItem } />
        {/* <button
          onClick={ this.addItem }
        >Add item</button> */}
      </div>
    );

  }
}