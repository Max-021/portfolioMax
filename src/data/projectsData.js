import expandedIngerayProject from '../assets/images/portfolio/expanded-ingeray-project.png'
import expandedMaximilianoProject from '../assets/images/portfolio/expanded-maximiliano-project.png'
import expandedPortfolioProject from '../assets/images/portfolio/expanded-portfolio-project.png'

export const projects = [
    {
        url:"https://www.maximilianohombres.com.ar",
        name:"Maximiliano Hombres",
        descr:"This is a website with a simple and clear design, developed to provide quick and direct information about the shop.It is one of my first projects. I am currently developing a new version for this website using react",
        urlImg:'portada-maximiliano',
        cardImg:expandedMaximilianoProject,
        skillInfo:"Html, Css, Javascript"
    },
    {
        url:"https://www.ingeray.com.ar",
        name:"Ingeray",
        descr:"This website I worked, and I currently work in has to parts, the first is the public frontend content which is intended to show the products and services the company? offers, the other part is the (internal platform?). In the latter I work in the frontend side as well as the backend side providing maintenance and adding new functionalities as requested",
        urlImg:'portada-ingeray',
        cardImg:expandedIngerayProject,
        skillInfo:"Vue, Html, Css, Javascript, Php, Laravel, Mysql, Nodejs, MongoDb"
    },
    {
        url:"/",
        name:"Personal Portfolio",
        descr:"This is my personal portfolio! I designed it with the purpose of showing part of my skills at web development, I made it using react, and more technologies",
        urlImg: 'portada-portfolio',
        cardImg:expandedPortfolioProject,
        skillInfo:"React, Javascript, Html, Css, Json"
    },
    {
        url:"#",
        name:"Also...",
        descr:"I've worked on other different projects ",
        urlImg: 'portada-also',
        cardImg:expandedPortfolioProject,
        skillInfo:"React, Javascript, Html, Css, Json"
    },
]