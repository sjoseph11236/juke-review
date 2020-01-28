import React from 'react'
import Album from '../components/Album'
import SingleAlbum from '../components/SingleAlbum'

const Container = ({albums, handleSelectedAlbum, selectedAlbum }) => {

  return ( 
    <div className="container">
      {/* All albums */}
      {selectedAlbum.id ? 
      <SingleAlbum
        selectedAlbum={selectedAlbum}
      />:
      <div id="albums" className='row wrap'>
        {albums.map( album => {
          return <Album album={album} key={album.id} handleSelectedAlbum={handleSelectedAlbum} />
        })}
      </div> }
    </div>
  );
}

export default Container;