import React from 'react';
import SideBar  from './components/SideBar';
import Container from './components/Container'; 
import PlayContainer from './components/PlayContainer'


export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        {/* The music starts here! */}
        {/* Sidebar */}
        <SideBar />
        <Container />
        {/* player-container */}
        <PlayContainer/>
      </div>
    )
  }
}
