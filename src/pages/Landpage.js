import React from 'react'
import LinkCard from '../components/landpageComps/LinkCard'

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
      <div className='card-container'>
        {routes.map((ruta,index) => {
          return <LinkCard {...ruta}/>
        })}
      </div>
    </div>
  )
}

export default Landpage