import {FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaVuejs, FaLaravel, FaPhp, FaSass} from 'react-icons/fa'
import {SiMongodb, SiMysql} from 'react-icons/si'

import expandedIngerayProject from '../assets/images/portfolio/expanded-ingeray-project.webp'
import expandedMaximilianoProject from '../assets/images/portfolio/expanded-maximiliano-project.png'
import expandedPortfolioProject from '../assets/images/portfolio/expanded-portfolio-project.webp'

export const projects = [
    {
        url:"https://www.maximilianohombres.com.ar",
        name:"Maximiliano Hombres",
        descr:"This is a website with a simple and clear design, developed to provide quick and direct information about the shop.It is one of my first projects, I'm making a new version of this site for 2024",
        // descr:"This is a website with a simple and clear design, developed to provide quick and direct information about the shop.It is one of my first projects, now remade in 2024.",
        urlImg:'portada-maximiliano',
        cardImg:expandedMaximilianoProject,
        skillInfo: [<FaHtml5/>, <FaCss3Alt/>, <FaJs/>]
        // skillInfo: [<FaReact/>,<FaSass/>,<FaHtml5/>, <FaCss3Alt/>, <FaJs/>]
    },
    {
        url:"https://www.ingeray.com.ar",
        name:"Ingeray",
        descr:"This is my current job, it has two parts, the first is the public frontend content which is intended to show the products and services offered, the other part is the internal platform. In the latter I work in the frontend side as well as the backend side providing maintenance and adding new functionalities as requested.",
        urlImg:'portada-ingeray',
        cardImg:expandedIngerayProject,
        skillInfo:[<FaVuejs/>, <FaHtml5/>, <FaCss3Alt/>, <FaJs/>, <FaPhp/>, <FaLaravel/>, <SiMysql/>, <FaNodeJs/>, <SiMongodb/>],
    },
    {
        url:"/",
        name:"Personal Portfolio",
        descr:"This is my personal portfolio! I designed it with the purpose of showing part of my skills at web development, I made it using mainly react.",
        urlImg: 'portada-portfolio',
        cardImg:expandedPortfolioProject,
        skillInfo:[<FaReact/>, <FaSass/>, <FaJs/>, <FaHtml5/>, <FaCss3Alt/>],
    },
    {
        url:"#",
        name:"Other works",
        descr:"I've also worked on other different projects:",
        urlImg: 'portada-also',
        skillInfo:[<FaJs/>, <FaHtml5/>, <FaCss3Alt/>, <FaPhp/>, <SiMysql/>]
    },
]