import React from 'react';

import SingleAlbum from '../SingleAlbum/SingleAlbum';

import './AlbumCollectionView.css';

class AlbumCollectionView extends React.Component {

  render() {
    let {
      albums,
      requesting,
      artistName
    } = this.props;

    return (
      <div className="album-collection-container">
        { requesting && 
           <div className="empty-state">Loading your results...</div>
        }

        { !requesting && albums.length === 0 && artistName &&
           <div className="empty-state">Ooops, No results were found, Please check the name of the artist</div>
        }

        { !requesting && albums.length === 0 && !artistName &&
           <div className="empty-state">Please select an artist.</div>
        }

        { 
          !requesting && albums.map((album, i) => {
            return(
              <SingleAlbum 
                album = {album}
                key = {i}
              />
            )
          })
        }
      </div>
    );  
  }
}

export default AlbumCollectionView;
