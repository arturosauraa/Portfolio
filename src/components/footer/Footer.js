import React from 'react'
import LinkedIn from './LinkedIn.png'
import GitHub from './GitHub.png'
import Gmail from './Gmail.png'

export const Footer = ({footer}) => {
    return (  
    <div>
        <div class='flex justify-center items-center' >
        <a href='https://linkedin.com/in/arturo-saura-755140203' class='max-w-sm m-10'><img src={LinkedIn} alt="linkedin"/></a>
        <a href='https://github.com/arturosauraa' class='max-w-sm m-10'><img src={GitHub} alt="Github"/></a>
        <a href='https://a.saurabastida@gmail.com' class='max-w-sm m-10'><img src={Gmail} alt="Gmail"/></a>
        </div>
    </div>
    )
}