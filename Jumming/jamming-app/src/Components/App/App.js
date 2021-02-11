import React from 'react'
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.state = {searchResults: [
    {name: 'name1', artist: 'artist1', album: 'album1', id: '1'},
    {name: 'name2', artist: 'artist2', album: 'album2', id: '2'},
    {name: 'name3', artist: 'artist3', album: 'album3', id: '3'}],

    playlistName: 'playlistName',
    playlistTracks: [
      {name: 'name1', artist: 'artist1', album: 'album1', id: '4'},
      {name: 'name2', artist: 'artist2', album: 'album2', id: '5'},
      {name: 'name3', artist: 'artist3', album: 'album3', id: '6'}] };
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
    const ourList = this.props.playlistTracks;
    const newList = ourList.splice(ourList.indexOf(track), 0);
    this.setState({playlistTracks: newList})
  } 
  render(){
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">  
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
    </div>
  </div>
</div>
    );
  }  
}
export default App  
