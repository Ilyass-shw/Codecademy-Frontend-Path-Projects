import React from 'react'
import './SearchBar'

export class SearchBar  extends React.component{
    render(){
<div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <button className="SearchButton">SEARCH</button>
</div>
    }
}