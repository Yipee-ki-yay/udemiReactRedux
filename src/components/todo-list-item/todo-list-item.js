import React, { Component } from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     done: false
  //   };
  // }

  // state = {
  //   done: false,
  //   important: false,
  // };

  // onLabelClick = () => {
  //   this.setState(({done}) => {
  //     return {
  //       done: !done
  //     }
  //   });
  // };

  // onMarkImportant = () => {
  //   this.setState((state) => {
  //     return {
  //       important: !state.important
  //     }
  //   });
  // };

  render() {

    const { 
      label, 
      onDeleted, 
      onToggleImportant, 
      onToggleDone,
      done,
      important, 
    } = this.props;
    // const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }
  
    return (
      <span className={classNames} >
      
        <span 
          className="todo-list-item-label" 
          // onClick={this.onLabelClick}
          onClick={onToggleDone}
        >
          {label}
        </span>
  
        <button 
          type="button"
          className="btn btn-outline-success btn-small"
          // onClick={this.onMarkImportant}
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation"></i>
        </button>
  
        <button 
          type="button"
          className="btn btn-outline-success btn-small"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }

}