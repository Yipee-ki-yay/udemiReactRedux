import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
      // { label: 'Drink Coffee', important: false, id: "1" },
      // { label: 'Make Awesome App', important: true, id: "2" },
      // { label: 'Have a lunch', important: true, id: "3" },
    ],
    term: '',
    filter: 'all' //active, all, done
  }

  // componentDidMount = () => {
  //   this.setState(({ todoData, todoDataFiltered }) => {
  //     return {
  //       todoDataFiltered: todoData
  //     }
  //   })
  // }

  createTodoItem(label) {
    return {
      label, 
      important: false, 
      done: false,
      // id: this.state.todoData.length + 1,
      id: this.maxId++,
    }
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
    let item = this.createTodoItem(text);

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

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);

    return [...before, newItem, ...after];

  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
    console.log('onToggleDone', id);
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
    console.log('onToggleImportant', id);
  }

  onFilterChange = (filter) => {
    this.setState({ filter: filter });
  }

  onSearchChange = (term) => {
    this.setState({ term: term });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    
    return items.filter((item) => {
      return item.label.toLowerCase().includes(term.toLowerCase());
    })
  }

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
        break;
      case 'active':
        return items.filter((item) => !item.done);
        break;
      case 'done':
        return items.filter((item) => item.done);
        break;
      default:
        return items;
    }
  }

  render() {

    const { todoData, term, filter } = this.state;
    
    const visibleItems = this.filter(
      this.search(todoData, term), 
      filter
    );
    
    const doneCount = todoData.filter(el => el.done ).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app container">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={ this.onSearchChange } />
          <ItemStatusFilter 
            filter={ filter } 
            onFilterChange={ this.onFilterChange } 
          />
        </div>
        <TodoList 
          todos={ visibleItems } 
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant } 
          onToggleDone={ this.onToggleDone } 
        />
        <ItemAddForm onAddItem={ this.addItem } />
        {/* <button
          onClick={ this.addItem }
        >Add item</button> */}
      </div>
    );

  }
}