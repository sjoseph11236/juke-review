import React from 'react';
import Album from './Album'
import Songs from './Songs'

const SingleAlbum = () => {
  return ( 
    <div id="single-album" className="column">
      <Album />
      <Songs />
    </div>
  );
}

export default SingleAlbum;