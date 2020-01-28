import React from 'react';
import SideBar  from './components/SideBar';
import Container from './components/Container'; 
import PlayContainer from './components/PlayContainer';
import SingleAlbum from './components/SingleAlbum'
import axios from 'axios';


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
        }],
        currentPage: 'all-albums',
        selectedAlbum:  {
          "id": 1,
          "name": "No Dummy",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }   
        }
      }
    }

  async componentDidMount() {
    try {
      const { data }= await axios.get('/api/albums');
      this.setState({
        albums: data 
      })
    } catch (error) {
      console.log('This is the error ', error);
    }
  }

  handleSelectedAlbum (albumId) {
    return async() => {
      const {data } = await axios.get(`/api/${albumId}`)
      this.setState({
        selectedAlbum: data
      })
    }
  }

  render () {

    const { albums, currentPage, selectedAlbum} = this.state;
   
  
    return (
      <div id='main' className='row container'>
        {/* The music starts here! */}
        {/* Sidebar */}
        <SideBar />
        {/* {
          selectedAlbum.id
          ? 
              :
              
        } */}
        <SingleAlbum
                selectedAlbum={selectedAlbum}
              />
        {/* <Container 
          albums={albums} 
          currentPage={currentPage} 
          selectedAlbum={selectedAlbum} 
          handleSelectedAlbum={this.handleSelectedAlbum} 
          /> */}
        {/* player-container */}
        <PlayContainer/>
      </div>
    )
  }
}
