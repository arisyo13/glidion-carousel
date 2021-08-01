import React from 'react';
import './App.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from './conmponents/Carousel';

function App() {
  return (
    <div className="container">
      <Carousel />
    </div>
  );
}

export default App;
