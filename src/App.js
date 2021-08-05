import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import Card from './Components/Card.js';

const cards = [{
  	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
  	id: '1'
	}, {
  	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
  	id: '2'
	}, {
  	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
  	id: '3'
	}, {
  	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
  	id: '4'
	}
];

function App (){

  return (
  	<div className='App'>
  	{/*
        Traversing through cards arrray using map function
  	    and populating card with different image and color
    */}

  	{cards.map((card) => (
  		<Card image={card.image} color={card.id} />
  	))}

  	</div>
  );
}

export default App;
