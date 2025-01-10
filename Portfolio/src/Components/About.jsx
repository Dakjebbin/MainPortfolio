
import { motion } from "motion/react";
import { FaLaptopCode } from "react-icons/fa";
import { fadeIn, textVariant } from '../utils/motion';
import { MdEngineering } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:2}}
    id='about' className='mt-10 w-[90%] text-white m-auto'>
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
       
            <p className='flex font-zillaSlab justify-center text-white text-lg sm:text-xl'>
            HI, I am Nteinyem Nsan Jebbin, I don&apos;t just stop at design; I&apos;m all about fine-tuning performance. That means optimizing both the front-end and back-end to ensure your web app can gracefully handle heavy traffic and provide lightning-fast user experiences.
            Offering a strong attention to detail and accuracy, excellent problem-solving skills, and the important ability to work in fast-paced team environment. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world Problems.
            </p>
       </motion.p>


       <div className='flex flex-wrap  gap-10 mt-10'>
       <motion.div
       initial={{opacity: 0, scale: 0.9 }}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration:0.6}}
       className='flex-grow basis-72  cursor-pointer border-2 bg-[#3d4e79] hover:bg-[#272c39] duration-500 rounded-xl border-[#7269e3] flex flex-col items-center py-14 hover:shadow-lg hover:shadow-red-600'
       >
        
        <motion.div 
          initial={{opacity: 0, }}
          whileInView={{opacity: 1,}}
          transition={{duration:1.2}}
        className='flex flex-col items-center'>    
        <FaLaptopCode className="text-2xl sm:text-4xl" />
            <p className='font-Inter mt-3  font-bold text-lg sm:text-xl'>FrontEnd Developer</p> 
        </motion.div>
        </motion.div>

        <motion.div 
            initial={{opacity: 0, scale: 0.9 }}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration:0.6}}
        className='flex-grow basis-72 cursor-pointer border-2 bg-[#3d4e79] hover:bg-[#272c39] duration-500 rounded-xl border-[#7269e3] flex flex-col items-center justify-center py-14 sm:py-14 hover:shadow-lg hover:shadow-red-600'>
            <motion.div
             initial={{opacity: 0, }}
             whileInView={{opacity: 1,}}
             transition={{duration:1.2}}
            className='flex flex-col items-center' >
        <FaServer className="text-2xl sm:text-4xl" />
            <p className='font-Inter mt-3 font-bold text-lg sm:text-xl'>BackEnd Developer</p>
            </motion.div>
        </motion.div>

        
        <motion.div
            initial={{opacity: 0, scale: 0.9 }}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration:0.6}}
        className='flex-grow basis-72 cursor-pointer border-2 bg-[#3d4e79] hover:bg-[#272c39] duration-500 rounded-xl border-[#7269e3] flex flex-col items-center justify-center py-14 hover:shadow-lg hover:shadow-red-600'
        >
            <motion.div 
             initial={{opacity: 0, }}
             whileInView={{opacity: 1,}}
             transition={{duration:1.2}}
            className='flex flex-col items-center'>
        <MdEngineering className="text-2xl sm:text-4xl" />
            <p className='font-Inter mt-3 font-bold text-lg sm:text-xl'>Mechanical Engineer</p>
            </motion.div>
        </motion.div>

        <motion.div
            initial={{opacity: 0, scale: 0.9 }}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration:0.6, delay:0.8}}
        className='flex-grow basis-72 cursor-pointer border-2 bg-[#3d4e79] hover:bg-[#272c39] duration-500 rounded-xl border-[#7269e3] flex flex-col items-center justify-center py-14 hover:shadow-lg hover:shadow-red-600'
        >
           <motion.div
            initial={{opacity: 0, }}
            whileInView={{opacity: 1,}}
            transition={{duration:0.4}}
           className='flex flex-col items-center' > 
        <FaAward className="text-2xl sm:text-4xl" />
            <p className='font-Inter mt-3 font-bold text-lg sm:text-xl'>Experience</p>
            <p className='font-Inter italic text-[#ccc8c8]'>3 Years</p>
            </motion.div>
        </motion.div>
       </div>
    </motion.div>
  )
}

export default About