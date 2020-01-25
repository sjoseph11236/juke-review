import React from 'react'
import SongsList from './SongsList'

const Songs = () => {
  return ( 
    <table id='songs'>
      <tbody>
        <tr className="gray">
        <td>
                            </td>
          <td>#</td>
          <td>Name</td>
          <td>Arist</td>
          <td>Genre</td>
        </tr>
      <SongsList />
      </tbody>
    </table>
  );
}

export default Songs;