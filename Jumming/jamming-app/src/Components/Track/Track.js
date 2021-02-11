import React from 'react'
import './Track.css'

export class Track  extends React.Component{
  
  renderAction(){
    return this.props.isRemoval?<button className="Track-action">-</button> : <button className="Track-action">+</button>

  }
    render(){
      return (
<div className="Track">
  <div className="Track-information">
    <h3>{this.props.name}</h3>
    <p>{this.props.artist} | {this.props.album}</p>
  </div>
  {this.renderAction()}
</div>
      );
    }
}