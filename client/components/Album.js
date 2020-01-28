import React from 'react';

const Album = ({album, handleSelectedAlbum}) => {
  return ( 
    <div className="album">
      <a  onClick={handleSelectedAlbum}>
        <img src={album.artworkUrl} alt="imageCover"/>
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
  );
}

export default Album;