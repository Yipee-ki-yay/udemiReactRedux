import React, { Component } from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
    console.log(e.target.value);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {

    return (
      <form 
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input 
          type="text"
          className="form-controll"
          onChange={ this.onLabelChange }
          value={ this.state.label }
          placeholder="What needs to be done"
        />

        <button
          className="btn btn-outline-secondary"
        >Add item</button>
      </form>
    )
  }
}