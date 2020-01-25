import React from 'react';
import SideBar  from './components/SideBar';
import Container from './components/Container'; 
import PlayContainer from './components/PlayContainer'


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = { 
      albums: [
        {
          "id": 1,
          "name": "No Dummy",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        },
        {
          "id": 2,
          "name": "I React to State",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        }
      ]
    }
  }
  render () {

    const { albums } = this.state;
  
    return (
      <div id='main' className='row container'>
        {/* The music starts here! */}
        {/* Sidebar */}
        <SideBar />
        <Container albums={albums} />
        {/* player-container */}
        <PlayContainer/>
      </div>
    )
  }
}
