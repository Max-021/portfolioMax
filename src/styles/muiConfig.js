const firstColor = "#FFB100"
const secondColor = "#9C528B"
const darkColor = "153243"
const lightColor = "EEF0EB"

//Acá estan las configuraciones para el framer que sean comunes
export const container = {
    hidden: {opacity:0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
export const formChildren = {
    hidden: {opacity:0},
    show: {opacity:1}
  }  

export const configBox = {
    width: 1,
    minHeight: 'inherit',
}
export const centerMui = {
    justifyContent: 'center',
    alignItems: 'center',
}

export const formBox = {
    display: 'flex',
    flexDirection: 'column',
}

export const contactListPosition = {
    height: '150px',
    position: 'absolute',
    right: '0',
    top: 'calc((100vh - 150px) /2 )',
    padding: '0',
    overflow: 'hidden'
}

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    boxShadow: 24,
  }
// ACA ESTE OBJETO USARLO EN LOS SX DE DISTINTOS COMPONENTES PARA HACER PRUEBAS
export const borderedBox = {
    border: '1px solid black'
}
export const iconStyle = {
    minWidth: '0px',
    fontSize: '2rem'
}