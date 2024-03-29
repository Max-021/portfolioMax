import React, {useCallback} from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

//fronticons, tambien incluye Php
import JS from '../../assets/images/js.svg'
import Html from '../../assets/images/html5.svg'
import Css from '../../assets/images/css3.svg'
import Sass from '../../assets/images/sass.svg'
import LogoReact from '../../assets/images/react.svg'
import Vue from '../../assets/images/vuejs.svg'
//backicons
import Node from '../../assets/images/node-js.svg'
import Php from '../../assets/images/php.svg'
import Laravel from '../../assets/images/laravel.svg'
//dbicons
import MongoDb from '../../assets/images/mongodb.svg'
import MySQL from '../../assets/images/mysql.svg'

const dbIcons = [MongoDb,MySQL].map((el) => {
  return {
    src:el,
    width: 300,
    height:300,
  }
})
const frontIcons = [JS,Html,Css,Sass,LogoReact,Vue,Php].map((el) => {
  return {
    src:el,
    width: 300,
    height:300,
  }
})
const backIcons = [Node,Php,Laravel].map((el) => {
  return {
    src:el,
    width: 300,
    height:300,
  }
})

const AboutBkg = (props) => {

  // const [ActiveGroup,setActiveGroup] = useState(props.IconsSet);
  const options = {
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse"
        },
        onHover: {
          enable: false,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        },
        resize: false,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 2
        },
        connect: {
          distance: 80,
          lineLinked: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1
          }
        },
        push: {
          quantity: 2
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        enable: true,
        value: "#9C528B"
      },
      lineLinked: {
        blink: false,
        color: "#9C528B",
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200
          }
        },
        bounce: true,
        direction: "none",
        enable: true,
        outMode: "out",
        random: true,
        speed: 2,
        straight: true
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 11,
        distance: 70,
      },
      opacity: {
        animation: {
          enable: false,
          minimumValue: 0.2,
          speed: 1,
          sync: false
        },
        random: false,
        value: 1
      },
      rotate: {
        animation: {
          enable: false,
          speed: 0,
          sync: false
        },
        random: false,
        value: 0
      },
      shape: {
        type: "images",
        image: props.IconsSet === 'db' ? dbIcons : props.IconsSet === 'fe' ? frontIcons : backIcons ,
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false
        },
        random: false,
        value: 16
      },
      reduceDuplicates: true,
    },
  }  
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  })

  return (
    <Particles options={options} init={particlesInit} style={{zIndex: 1,}}>
        {props.children}
    </Particles>
  )
}


export default AboutBkg