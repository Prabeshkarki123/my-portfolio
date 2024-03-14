
// import myImg from '../../Assets/my-img.png';
// import hireMe from '../../Assets/hire-me.png';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import TypeWriterEffect from 'react-typewriter-effect';
// import { Link } from 'react-scroll';
import React, { useEffect } from 'react';
import './homeImage.css';

function Firefly() {
      

  useEffect(() => {
    const firefliesContainer = document.getElementById('firefliesContainer');

    // Number of fireflies
    const numberOfFireflies = 100;

    // Create fireflies
    for (let i = 0; i < numberOfFireflies; i++) {
      const firefly = document.createElement('div');
      
      firefly.className = 'firefly w-[3px] lg:w-[4px] h-[3px] lg:h-[4px]';
      firefliesContainer.appendChild(firefly);

      // Set random position relative to myImg
      const randomX = Math.random() * 80; // Adjusted for better positioning
      const randomY = Math.random() * 80; // Adjusted for better positioning

      firefly.style.left = `${randomX}vw`;
      firefly.style.top = `${randomY}vh`;

      // Set random animation delay
      const randomDelay = Math.random() * 3;
      firefly.style.animationDelay = `-${randomDelay}s`;
    }
  }, []);

  return (
        <div id='firefliesContainer' className='fireflies-container'></div>
  );
}
export default Firefly;
