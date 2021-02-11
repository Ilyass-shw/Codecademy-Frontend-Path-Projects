import React from 'react'
import './TrackList.css'
import {Track} from '../Track/Track'
export class TrackList extends React.Component{
    
    render(){
        const Tracks = this.props.tracks.map(element=>{
            return <Track name={element.name} album={element.album} artist={element.artist} key={element.id} />;
        });
        return (
<div className="TrackList">
    {Tracks}
</div>
        );
    }
}