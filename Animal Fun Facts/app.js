import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const background = <img className = "background" alt="ocean" src="/images/ocean.jpg"></img>
const animalFacts =(
   <div>
      <p>{title===''? "Click an animal for a fun fact" : title}</p>
      {background}
   </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
