import React from 'react'
import './TrackList.css'
import {Track} from '../Track/Track'
export class TrackList extends React.Component{
    
    render(){
        return (
<div className="TrackList">
    {this.props.tracks.map(element=>{
            return <Track isRemoval={this.props.isRemoval} trackk={element} key={element.id} onAdd={this.props.onAdd} />;
        })}
</div>
        );
    }
}