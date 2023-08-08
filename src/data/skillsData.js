import {FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaVuejs, FaLaravel, FaPhp, FaSass} from 'react-icons/fa'
import {SiMongodb, SiMysql} from 'react-icons/si'

export const skillGroup = [
    {
        groupName: 'Frontend development',
        skills: new Map([
            ['Javascript', <FaJs/>],
            ['React', <FaReact/>],
            ['Html', <FaHtml5/>],
            ['Css', <FaCss3Alt/>],
            ['Sass', <FaSass/>],
            ['Vue', <FaVuejs/>],
            ['Php', <FaPhp/>],
        ]),
    },
    {
        groupName: 'Backend development',
        skills: new Map([
            ['Node', <FaNodeJs/>],
            ['Laravel', <FaLaravel/>],
            ['Php', <FaPhp/>],
        ]),
    },
    {
        groupName: 'Database management',
        skills: new Map([
            ['Mysql', <SiMysql/>],
            ['MongoDB', <SiMongodb/>],
        ])
    },
]

export const skill = [
    {
        name:"Javascript",
        img: <FaJs/>,
    },
    {
        name:"Html",
        img: <FaHtml5/>,
    },
    {
        name:"Css",
        img: <FaCss3Alt/>,
    },
    {
        name: "Sass",
        img: <FaSass/>,
    },
    {
        name:"React",
        img: <FaReact/>,
    },
    {
        name:"Node",
        img: <FaNodeJs/>,
    },
    {
        name: "MongoDb",
        img: <SiMongodb/>,
    },
    {
        name: "Vuejs",
        img: <FaVuejs/>,
    },
    {
        name: "Php",
        img: <FaPhp/>,
    },
    {
        name: "Laravel",
        img: <FaLaravel/>,
    },
    {
        name: "Mysql",
        img: <SiMysql/>,
    },
]