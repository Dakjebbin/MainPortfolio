import { useEffect, useState } from "react"
import { assets } from "../assets/assets";
import { motion } from "motion/react"


const Hero = () => {

  const [visible, setIsVisible] = useState("CODER");
  const [showing, setShowing] = useState(true); 


    const text = [
      "CODER",
      "DESIGNER",
      "ENGINEER"
    ]

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setShowing(false); 

      setTimeout(() => {
        setIsVisible(text[i]);
        setShowing(true);
        i = (i + 1) % text.length;
      }, 500)
      
      
    }, 3000)

    return () => clearInterval(intervalId);
  }, [])
  
   return (
    <section id="home" className=" w-full flex items-center justify-center h-auto mx-auto p-[20px] mt-10">
      <div className="flex animate-fade-in max-w-[1200px] w-full lg:flex-row items-center flex-col mx-0 my-auto ">
      <div className="flex flex-1 max-w-[700px] justify-center items-center p-[20px]">
      <div className="flex mr-2 flex-col justify-center items-center">
           <div className="w-4 h-4 bg-[#7269e3] rounded-full"/>
           <div className="w-1 sm:h-96 h-96 bg-gradient-to-b from-[#7269e3] to-violet-300"/>
           </div>
        <div>
          
        <motion.h1 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay:0.3}}
        className="text-white text-[40px] leading-[50px] sm:leading-[70px]  md:text-[60px] font-bold">HI, I&apos;m <span className="text-[#7269e3]">Nteinyem!</span> </motion.h1> 

        <motion.p
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay:0.5}}
        className="text-white font-bold text-[30px] md:text-[45px]">CREATIVE</motion.p>

      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration: 0.6, delay:0.7}}>
      <p className={`transition-all duration-500 leading-[50px] sm:leading-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#7269e3] to-[white] font-bold text-[40px] sm:text-[50px] ${showing ? "opacity-100" : "opacity-0"}`}>
      {visible}
      </p>
      </motion.div>

      <div className="text-white font-zillaSlab text-xl">
      <motion.p
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay:0.3}}
      >
      I&apos;m a full stack developer  
            with a focus on creating (and occasionally designing) 
            exceptional digital experiences that are fast, accessible, visually appealing,
            and responsive.Even though I have been creating web applications for over 3 years, 
            I still love it as if it was something new.
            </motion.p>  
            <br />
           <p><strong>Location:</strong> Port Harcourt, Rivers State</p>
        
        <motion.div 
         initial={{y: 30, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration: 0.6, delay:1}}
        className="my-5">
           <a
            className="mt-5 px-10 py-3 bg-[#ccc8c8] text-black font-Inter cursor-pointer border-2 rounded-full border-gray-500"
            href="/web cv.pdf" 
            target="_blank"
          >
            My resume
          </a>
          </motion.div>
     
      </div>    
 </div>

           </div>

 <motion.div 
 initial={{scale: 0}}
 whileInView={{scale: 1}}
 transition={{duration: 0.8, type: "spring", stiffness:"100"}}
 className="text-white max-w-[500px] justify-center p-[20px] items-center flex flex-1 ">
  <img className="max-w-full rounded-full h-auto border-[#7269e3] border-4" src={assets.circleImage} alt="" />
</motion.div>

</div>

<div className="absolute sm:bottom-10 bottom-3 flex justify-center items-center">
<a href="#about">
  <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-600 flex justify-center items-start p-2">
    <motion.div animate={{y:[0,24,0]}}
    transition={{duration:1.5, 
      repeat: Infinity,
    repeatType:"loop"
    }}
    className="w-3 h-3 rounded-full bg-gray-600 mb-1"
    />
  </div>
</a>
</div>
    </section>
        

  )
}

export default Hero