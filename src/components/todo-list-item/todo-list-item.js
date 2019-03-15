import React, { Component } from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     done: false
  //   };
  // }

  state = {
    done: false
  };

  onLabelClick = () => {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    const style = {
      color: important ? 'tomato' : 'black',
    }
  
    return (
      <span className={classNames} >
      
        <span 
          className="todo-list-item-label" 
          style={style} 
          onClick={this.onLabelClick.bind(this)}
        >
          {label}
        </span>
  
        <button 
          type="button"
          className="btn btn-outline-success btn-small"
        >
          <i className="fa fa-exclamation"></i>
        </button>
  
        <button 
          type="button"
          className="btn btn-outline-success btn-small"
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }

}