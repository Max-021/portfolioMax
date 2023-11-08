import React, {useCallback} from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'


const AnimatedBkg = (props) => {
  const options = {
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: false,
          mode: "repulse"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse"
        },
        onHover: {
          // acá no olvidarme de darle algo de interactividad al fondo animado
          enable: true,
          mode: "repulse",
        },
        resize: true
      },
      modes: {
        trail:{
          delay: 0.5,
          pauseOnStop: false,
        },
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0.8,
          size: 20,
          speed: 10
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
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 50,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#EEF0EB"
      },
      lineLinked: {
        blink: false,
        color: "#000",
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0,
        width: 0
      },
      rotate: {
        value: 85,
        random: false,
        direction: "clockwise",
        animation: {
          enable: false,
          speed: 5,
          sync: false
        }
      },
      move: {
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        },
        bounce: false,
        direction: "random",
        enable: true,
        outMode: "out",
        random: true,
        speed: {min:0.5, max: 2},
        straight: true
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        limit: 120,
        value: 60
      },
      opacity: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 1,
          sync: false
        },
        random: false,
        value: 0.5
      },
      shape: {
        stroke: {
          color: "#EEF0EB",
          width: 0.4
        },
        type: "line"
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 30,
          sync: false
        },
        random: false,
        value: 150
      }
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: "#9C528B",
        lineWidth: 0.5
      },
      move: {
        radius: 10
      },
      scale: 1,
      type: "none",
      url: ""
    }
  }

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  })

  return (
    <Particles options={options} init={particlesInit}>
      {props.children}
    </Particles>
  )
}

export default AnimatedBkg