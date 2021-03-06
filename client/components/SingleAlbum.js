import React from 'react';
import Album from './Album'
import Songs from './Songs'

const SingleAlbum = ({selectedAlbum}) => {
  console.log("TCL: SingleAlbum -> selectedAlbum", selectedAlbum)
  return ( 
    <div id="single-album" className="column">
      <Album album={selectedAlbum}/>
      <Songs />
    </div>
  );
}

export default SingleAlbum;