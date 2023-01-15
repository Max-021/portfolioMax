import {SiGmail, SiGithub, SiLinkedin} from 'react-icons/si'

const links = [
    {
        url: "/",
        name: "Home"
    },
    {
        url: "/about",
        name: "About"
    },
    {
        url: "/portfolio",
        name: "Portfolio"
    },
    {
        url: "/contact",
        name: "Contact"
    }
]
export default links;

export const contactInfo = [
    {
        name: "maxifregawebdev@gmail.com",
        link: 'maxifregawebdev@gmail.com',
        icon: <SiGmail/>,
    },
    {
        name: "linkedin.com/in/maximiliano-frega",
        link: 'https://www.linkedin.com/in/maximiliano-frega',
        icon: <SiLinkedin/>,
    },
    {
        name: "github.com/Max-021",
        link: "https://www.github.com/Max-021",
        icon: <SiGithub/>,
    }
]