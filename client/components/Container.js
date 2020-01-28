import React from 'react'
import Album from '../components/Album'
import SingleAlbum from '../components/SingleAlbum'

const Container = ({albums, handleSelectedAlbum }) => {

  return ( 
    <div className="container">
      {/* All albums */}
      {/* <div id="albums" className='row wrap'>
        {albums.map( album => {
          return <Album album={album} key={album.id} handleSelectedAlbum={handleSelectedAlbum} />
        })}
      </div> */}
      <SingleAlbum
                selectedAlbum={selectedAlbum}
              />
    </div>
  );
}

export default Container;