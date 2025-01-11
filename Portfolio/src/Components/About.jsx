
import { motion } from "motion/react";
import { FaLaptopCode } from "react-icons/fa"; 
import { MdEngineering } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import skills from "../utils/skills.js";

const About = () => {

    const [skill, setSkill] = useState([])

    useEffect(()=> {
        setSkill(skills)
    },[skill])
   

    console.log(skill);
    
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

        <div className="flex flex-wrap">
        {skill.map((myskill,index) => (
             (
                <div key={index} className="flex-grow flex items-center">
                      {myskill.name} {React.createElement(myskill.icon)}
                </div>
            )
        ))}
        </div>
       </div>

       
    </motion.div>
  )
}

export default About