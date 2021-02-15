import React from 'react'
import LocalPlaylist from '../LocalPlaylist/LocalPlaylist';
import '../Playlist/Playlist.css'
import Spotify from '../../Util/Spotify';

export class LocalPlaylists extends React.Component{
  constructor(props){
    super(props);
    this.state = {playlists: []}
  }
  componentDidMount(){
    Spotify.getUserPlaylists().then((playlists)=>{
      const LocalPlaylists= playlists.map(list=>{
        return <LocalPlaylist list={list} key={list.id}/>
      });
      this.setState({playlists: LocalPlaylists});
    })
  }
    render(){
      return (
<div className="Playlist">
  <input defaultValue ={'Local Playlists'} />
  {this.state.playlists}
</div>
      );
    }
    
}