import React from 'react'
import './Track.css'

export class Track  extends React.component{
  constructor(props){
    super(props);
    this.props = {isRemoval : true};
  }
  renderAction(){
    return isRemoval?<button className="Track-action">-</button> : <button className="Track-action">+</button>

  }
    render(){
<div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
    {this.renderAction()}
  </div>
  <button className="Track-action"><!-- + or - will go here --></button>
</div>
    }
}