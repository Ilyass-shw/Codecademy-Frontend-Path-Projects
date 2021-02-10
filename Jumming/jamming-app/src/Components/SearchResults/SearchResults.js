import React from 'react'
import './SearchResults.css'
import {TrackList} from '../TrackList/TrackList'


export class SearchResults  extends React.component{
    render(){
<div className="SearchResults">
  <h2>Results</h2>
  <TrackList component/>
</div>
    }

}