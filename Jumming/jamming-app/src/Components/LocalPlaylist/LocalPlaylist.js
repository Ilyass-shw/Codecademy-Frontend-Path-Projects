import React from 'react'
import '../Track/Track.css'

class LocalPlaylist  extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
      return (
<div className="Track">
  <div className="Track-information">
    <h3>{this.props.list.name}</h3>
  </div>
</div>
      );
    }
}
export default LocalPlaylist;