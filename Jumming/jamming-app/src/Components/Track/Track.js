import React from 'react'
import './Track.css'

export class Track  extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack(){
    this.props.onAdd(this.props.trackk)
  }
  removeTrack(){
    this.props.onRemove(this.props.trackk)
  }
  renderAction(){
    return this.props.isRemoval?<button onClick={this.removeTrack} className="Track-action">-</button> : <button className="Track-action" onClick={this.addTrack}>+</button>

  }

    render(){
      return (
<div className="Track">
  <div className="Track-information">
    <h3>{this.props.trackk.name}</h3>
    <p>{this.props.trackk.artist} | {this.props.trackk.album}</p>
  </div>
  {this.renderAction()}
</div>
      );
    }
}