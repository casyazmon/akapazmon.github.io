'use client'
import React, { useEffect, useState } from 'react'

const AnimateText = ({ text }) => {
    const [animatedText, setAnimatedText] = useState('');

    useEffect(() => {
        let intervalId;

        const animateText = () => {
            let index = 0;
            intervalId = setInterval(() => {
                setAnimatedText((prevText) => prevText + text[index]);
                index++;
                if(index === text.length) {
                    clearInterval(intervalId);
                }
            }, 100)
        };
        animateText();
    }, [text]);

  return (
    <h1 className='text-4xl sm:text-5xl font-extrabold '>{animatedText}</h1>
  )
}

export default AnimateText