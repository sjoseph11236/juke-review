import React from 'react'
import Album from '../components/Album'
import SingleAlbum from './SingleAlbum';

const Container = ({albums, currentPage, selectedAlbum }) => {

  switch(currentPage) { 
    case 'single-album':
      return ( 
        <div className="container">
          {/* Single-album */}
          <SingleAlbum selectedAlbum={selectedAlbum}/>
        </div>
      );
      break;
    case 'all-albums':
      return ( 
        <div className="container">
          {/* All albums */}
          <div id="albums" className='row wrap'>
            {albums.map( album => {
              return <Album album={album} key={album.id} />
            })}
          </div>
        </div>
      );
      break;
  }


}

export default Container;