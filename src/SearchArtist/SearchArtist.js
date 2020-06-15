import React from 'react';
import './SearchArtist.css';

class SearchArtist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSubmit() {
    this.props.onSubmitClick(this.state.value);
  }

  handleOnChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleKeyPress(event) {
    if(event.key === "Enter") {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className="search-artist-container">
        <input className="search-input" type="text" placeholder="Search" onChange={this.handleOnChange} onKeyPress={this.handleKeyPress}/>
        <div className="search-button" onClick={this.handleSubmit}> Show Results </div>
      </div>
    );  
  }
}

export default SearchArtist;
