export const firstColor = "#FFB100"
export const secondColor = "#9C528B"
export const darkColor = "#153243"
export const lightColor = "#EEF0EB"
export const successColor = '#2e7d32'

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

export const contactBtn = {
  color: lightColor,
  backgroundColor: darkColor,
  marginTop: '10px',
  textTransform: 'none',
  "&:hover": {
    color: darkColor,
    outline: `2px solid ${darkColor}`
  }
}
export const sendingBtn = {
  marginTop: '10px',
  backgroundColor: 'transparent',
  color: secondColor,
  outline: `2px solid ${secondColor}`,
  textTransform: 'none',
}
export const sentBtn = {
  marginTop: '10px',
  backgroundColor: successColor,
  color: lightColor,
  textTransform: 'none',
}

export const contactListPosition = {
    height: '150px',
    position: {
      md: 'absolute',
    },
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
export const iconStyle = {
    minWidth: '0px',
    fontSize: '2rem'
}

export const cardConfig = {
  backgroundColor: 'transparent'
}