import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const skills = [
    {
        name: "Html5",
        icon: FaHtml5,
        style: {color: "red"}
    },
    {
        name: "CSS3",
        icon: FaCss3Alt 
        },
    {
        name: "JavaScript",
        icon: IoLogoJavascript 
    },
    {
        name: "ReactJs",
        icon: FaReact  
    },
    {
        name: "Tailwind Css",
        icon:  SiTailwindcss 
    },
    {
        name: "Figma",
        icon: FiFigma 
    },
    {
        name: "NodeJs",
        icon: IoLogoNodejs 
    },
    {
        name: "ExpressJS",
        icon: SiExpress 
    },
    {
        name: "Mongodb",
        icon: SiMongodb 
    },
    {
        name: "Git/Github",
        icon: FaGithub 
    },
    {
        name: "Postgresql",
        icon: BiLogoPostgresql 
    },
]

export default skills;