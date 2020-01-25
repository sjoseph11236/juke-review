import React from 'react'
import Album from '../components/Album'

const Container = ({albums}) => {
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
}

export default Container;