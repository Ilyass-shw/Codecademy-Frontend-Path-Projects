import React from 'react'
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'
import Spotify from '../../Util/Spotify';

class App extends React.Component {
  constructor(props){
    super(props);


    this.savePlaylist = this.savePlaylist.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.search = this.search.bind(this);

    this.state = {searchResults: [],
    playlistName: 'playlistName',
    playlistTracks: [] };
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(element=> element.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(()=>{
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    });
  }

  updatePlaylistName(name){
    this.setState({playlistName : name });
  }
  
  addTrack(trackkk){
    let isNotInPlaylist = true;
    for(let i=0;i<this.state.playlistTracks.length;i++){
      if(this.state.playlistTracks[i].id===trackkk.id){ isNotInPlaylist = false;}
    }
    if(isNotInPlaylist){
      const newPlaylistTracks = this.state.playlistTracks.concat(trackkk) ;
      this.setState({playlistTracks: newPlaylistTracks});
    }
    
  }
  removeTrack(track) {
    const ourList = this.state.playlistTracks;
    ourList.splice(ourList.indexOf(track), 1);
    this.setState({playlistTracks: ourList})
  } 

  search(term){
     Spotify.search(term).then(searchResults=>{
      this.setState({searchResults : searchResults});
     });

  }

  render(){
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">  
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist onSave = {this.savePlaylist} onNameChange= {this.updatePlaylistName}  playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
      <Playlist   onRemove={this.removeTrack}/>
    </div>
  </div>
</div>
    );
  }  
}
export default App  
