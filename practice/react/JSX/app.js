import { animals } from './animals';
import React from './react';
import ReactDOM from './react-dom';

function displayFact(e) {
  let randomIndex = Math.floor(Math.random() * animals[e.target.alt].facts.length);
  let funFact = animals[e.target.alt].facts[randomIndex];
  document.getElementById('fact') = funfact;
}

let title = "";

const showBackground = true;

let background = <img className='background' alt='ocean' src="/images/ocean.jpg"/>

let images = animals.map((a) => <img key={a} className='animal' alt={a} src={animals[a].image} ariaLabel={a} role='button' onClick={displayFact}/>)

let animalFacts = (<div>
                      <h1>{title == ""? "Click an animal for a fun fact": title}</h1>
                      {showBackground && background}
                      <div className='animals'>
                        {images};
                      </div>
                      <p id='fact'>
                      </p>
                    </div>)


ReactDOM.render(animalFacts, document.getElementById("root"));
