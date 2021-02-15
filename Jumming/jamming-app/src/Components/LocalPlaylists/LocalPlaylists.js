import React from 'react'
import LocalPlaylist from '../LocalPlaylist/LocalPlaylist';
import '../Playlist/Playlist.css'

export class LocalPlaylists extends React.Component{
  constructor(props){
    super(props);
  }
  
    render(){
      return (
<div className="Playlist">
  <input defaultValue ={'Local Playlists'} />
  <LocalPlaylist/>
</div>
      );
    }
}