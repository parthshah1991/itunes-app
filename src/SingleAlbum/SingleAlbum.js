import React from 'react';

import './SingleAlbum.css';

function SingleAlbum(props) {

  const {
    artistName,
    trackName,
    artworkUrl100,
    releaseDate,
    previewUrl
  } = props.album;

  const releaseYear = new Date(releaseDate).getFullYear();

  return (
    <div className="single-album-container">
      
      <div className="album-img-container">
        <img className="album-img" src={artworkUrl100} alt={trackName}></img>
      </div>

      <div className="right-side">
        <div className="album-name">{trackName}, {releaseYear}</div>
        <div className="album-artists">{artistName}</div>
        <audio className="album-preview" src={previewUrl} controls preload="none">
          Your browser does not support the <code>audio</code> element.
         </audio>
      </div>
    </div>
  )
}

export default SingleAlbum;
