import React from 'react';

const Album = ({album}) => {
  return ( 
    <div className="album">
      <a href={`/albums/${album.id}`}>
        <img src={album.artworkUrl} alt="imageCover"/>
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
  );
}

export default Album;