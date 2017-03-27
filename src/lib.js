import React from 'react'
import text from './titles.json'
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'

export const hello = (
    <h1 id='title' 
           className='hello'> 
           {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id='title'
        className='goodbye'>
        {text.goodbye}
    </h1>
)

//webpack is bundling CSS so we don't have to make additional HTTP requests
//Webpack is providing Babel, transpiling SCSS to CSS, and loading JSON.
