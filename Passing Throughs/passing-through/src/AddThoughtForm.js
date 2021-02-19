import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {

  const [text, setText]= useState(['']);
  const handleTextChange= ({target})=>{
    setText(target.value);
  }

  return (
    <form className="AddThoughtForm">
      <input
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
