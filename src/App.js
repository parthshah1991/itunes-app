import React from 'react';
import axios from 'axios';

import SearchArtist from './SearchArtist/SearchArtist';
import AlbumCollection from './AlbumCollection/AlbumCollectionView';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      albums: [],
      requesting: false,
      artistName: ''
    }
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick(value) {
    this.setState({
      requesting: true,
      artistName: value
    });
    
    axios.get('https://itunes.apple.com/search?term=' + encodeURI(value))
      .then(res => {
        const albums = res.data.results;
        this.setState({ 
          albums,
          requesting: false
        });
      })
  }

  render() {
    return (
      <div className="App">
        <div className="app-title"> Find albums for your favourite artists! </div>
        <SearchArtist
          onSubmitClick = {this.onSubmitClick}
        />
        <AlbumCollection 
          albums = {this.state.albums}
          requesting = {this.state.requesting}
          artistName = {this.state.artistName}
        />
      </div>
    );  
  }
}

export default App;
