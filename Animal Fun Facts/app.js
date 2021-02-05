import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';


// const images = animals.map((pic, i)=>{
//     pic
// })
const images = [];
for(const animal in animals){
    images.push(<img
                    key={animal}
                    className='animal'
                    alt={animal}
                    src= {animals[animal].image}
                    aria-label={animal}
                    role='button'
                >{animal}
                </img> );
}
const title = '';
const background = <img className = "background" alt="ocean" src="/images/ocean.jpg"></img>
const animalFacts =(
   <div>
      <p>{title===''? "Click an animal for a fun fact" : title}</p>
      {background}
   </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
