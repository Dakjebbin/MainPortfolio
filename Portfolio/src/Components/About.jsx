
import { motion } from "motion/react";
import { FaLaptopCode } from "react-icons/fa"; 
import { MdEngineering } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:2}}
    id='about' className='pt-20 w-[90%] text-white m-auto'>
       <motion.div 
       initial={{opacity: 0, y: -20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration:1, delay:0.3}}>
        <p className='font-Inter text-center text-[#ccc8c8] text-sm '>Get To Know</p>
        <p className='font-Inter text-center text-2xl text-white font-bold'>About Me</p>
       </motion.div>

       <motion.p
       initial={{opacity: 0, y: -20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration:1, delay:0.5}}
       className='mt-10 text-justify'>
       
            <span className='flex font-zillaSlab justify-center text-white text-lg sm:text-xl'>
            HI, I am Nteinyem Nsan Jebbin, I don&apos;t just stop at design; I&apos;m all about fine-tuning performance. That means optimizing both the front-end and back-end to ensure your web app can gracefully handle heavy traffic and provide lightning-fast user experiences.
            Offering a strong attention to detail and accuracy, excellent problem-solving skills, and the important ability to work in fast-paced team environment. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world Problems.
            </span>
       </motion.p>


       <div className='flex flex-wrap  gap-8 mt-10 mb-14'>
       <motion.div
       initial={{opacity: 0, scale: 0.9 }}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration:0.6}}
       className='flex-grow basis-60  cursor-pointer border-2 bg-[#212a4148] hover:bg-[#272c39] duration-500 rounded-xl border-[#7269e3] flex flex-col items-center py-14 hover:shadow-lg hover:shadow-red-600 hover:animate-pulse'
       >
        
        <div 
        className='flex flex-col items-center'>    
        <FaLaptopCode className="text-2xl sm:text-4xl" />
            <p className='font-Inter mt-3  font-bold text-lg sm:text-xl'>FrontEnd Developer</p> 
        </div>
        </motion.div>

        <motion.div 
            initial={{opacity: 0, scale: 0.9 }}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration:0.6}}
        className='flex-grow basis-60 cursor-pointer border-2 bg-[#212a4148] hover:bg-[#272c39] duration-500 rounded-xl border-[#7269e3] flex flex-col items-center justify-center py-14 sm:py-14 hover:shadow-lg hover:shadow-red-600 hover:animate-pulse'>
            <div
            className='flex flex-col items-center' >
        <FaServer className="text-2xl sm:text-4xl" />
            <p className='font-Inter mt-3 font-bold text-lg sm:text-xl'>BackEnd Developer</p>
            </div>
        </motion.div>

        
        <motion.div
            initial={{opacity: 0, scale: 0.9 }}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration:0.6}}
        className='flex-grow basis-60 cursor-pointer border-2 bg-[#212a4148] hover:bg-[#272c39] duration-500 rounded-xl border-[#7269e3] flex flex-col items-center justify-center py-14 hover:shadow-lg hover:shadow-red-600 hover:animate-pulse'
        >
            <div 
            className='flex flex-col items-center'>
        <MdEngineering className="text-2xl sm:text-4xl" />
            <p className='font-Inter mt-3 font-bold text-lg sm:text-xl'>Mechanical Engineer</p>
            </div>
        </motion.div>

        <motion.div
            initial={{opacity: 0, scale: 0.9 }}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration:0.6}}
        className='flex-grow basis-60 cursor-pointer border-2 bg-[#212a4148] hover:bg-[#272c39] duration-500 rounded-xl border-[#7269e3] flex flex-col items-center justify-center py-14 hover:shadow-lg hover:shadow-[#dc26265d] hover:animate-pulse'
        >
           <div
           className='flex flex-col items-center' > 
        <FaAward className="text-2xl sm:text-4xl" />
            <p className='font-Inter mt-3 font-bold text-lg sm:text-xl'>Experience</p>
            <p className='font-Inter italic text-[#ccc8c8]'>3 Years</p>
            </div>
        </motion.div>
       </div>

       <div>
        <p className="font-Inter text-center text-2xl text-white font-semibold">My Skills</p>

        <div 
            
        className="flex gap-4 justify-center flex-wrap mt-6">
        
        <motion.div
         initial={{y: -70, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration: 0.8, delay:0.5}}
        className="basis-40 hover:-translate-y-1 duration-500 shadow-lg shadow-black py-2 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2"> 
                HTML5
            </p>
            <FaHtml5 className="text-[20px] text-[#E44D26]"/>
        </motion.div>

        <motion.div 
        initial={{y: -65, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay:0.5}}
        className="basis-40 hover:-translate-y-1 shadow-lg shadow-black duration-500 py-2 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                Css3
            </p>
            <FaCss3Alt className="text-[20px] text-[#5a96c0]"/>
        </motion.div>


        <motion.div 
         initial={{y: -60, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration: 0.5, delay:0.5}}
        className="basis-40 hover:-translate-y-1 shadow-lg shadow-black duration-500 py-2 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                JavaScript
            </p>
            <IoLogoJavascript className="text-[20px] text-[#F7DF1E]"/>
        </motion.div>

        <motion.div
         initial={{y: -55, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration: 0.4, delay:0.5}}
        className="basis-40 hover:-translate-y-1 shadow-lg shadow-black duration-500 py-2 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                Tailwind Css
            </p>
            <SiTailwindcss className="text-[20px] text-[#38BDF8]"/>
        </motion.div>

        <motion.div
         initial={{y: -50, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration: 0.3, delay:0.5}}
        className="basis-40 hover:-translate-y-1 shadow-lg shadow-black duration-500 py-2 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                React Js
            </p>
            <FaReact className="text-[20px] text-[#61DAFB]"/>
        </motion.div>

        <motion.div
         initial={{y: -45, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration: 0.2, delay:0.5}}
        className="basis-40 hover:-translate-y-1 shadow-lg shadow-black duration-500 py-2 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                NodeJs
            </p>
            <IoLogoNodejs className="text-[#8CC84B] text-[20px]"/>
        </motion.div>

        <motion.div
        initial={{y: -40, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.1, delay:0.5}}
        className="basis-40 py-2 hover:-translate-y-1 shadow-lg shadow-black duration-500 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                Mongodb
            </p>
            <SiMongodb className="text-[20px] text-[#47A248]"/>
        </motion.div>

        <motion.div
        initial={{y: -35, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.2, delay:0.4}}
        className="basis-40 py-2 hover:-translate-y-1 shadow-lg shadow-black duration-500 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                Figma
            </p>
            <FiFigma className="text-[20px] text-[#F24E1E]"/>
        </motion.div>

        <motion.div 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.2, delay:0.3}}
        className="basis-40 py-2 hover:-translate-y-1 shadow-lg shadow-black duration-500 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                Postgresql
            </p>
            <BiLogoPostgresql className="text-[20px] text-[#336791]"/>
        </motion.div>

        <motion.div
        initial={{y: -25, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.2, delay:0.2}}
        className="basis-40 py-2 hover:-translate-y-1 shadow-lg shadow-black duration-500 bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="font-Inter mr-2">
                Git/Github
            </p>
            <FaGithub className="text-[20px] text-[#181717]"/>
        </motion.div>
        </div>
       </div>

       
    </motion.div>
  )
}

export default About