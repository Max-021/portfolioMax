import React from 'react'
import LinkCard from '../components/landpageComps/LinkCard'
import AnimatedBg from '../components/landpageComps/AnimatedBg'

const routes = [
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
  {
    name: 'Portfolio',
    url: '/portfolio'
  },
  {
    name: 'Click me!',
    url: '/game'
  }
]

const Landpage = () => {
  return (
    <div className='landpage-section'>
      <AnimatedBg/>
      <div className='card-container'>
        {routes.map((ruta,index) => {
          return <LinkCard {...ruta} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Landpage