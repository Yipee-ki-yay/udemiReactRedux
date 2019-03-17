import React, { Component } from 'react'

import './search-panel.css'

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <input 
        // style={searchStyle}
        type="text" 
        // placeholder={searchText} 
        className="search-input"
        value={ this.state.term }
        onChange={ this.onSearchChange }
      />
    )
  }
}

// const SearchPanel = ( {  } ) => {

//   const searchText = 'Type here to search';
//   const searchStyle = {
//     fontSize: '20px',
//   }

//   return (
//     <input 
//       style={searchStyle}
//       type="text" 
//       placeholder={searchText} 
//       className="search-input"
//       // onChange={ (e) => onSearch(e.target.value) }
//     />
//   )
// };

// export default SearchPanel;
