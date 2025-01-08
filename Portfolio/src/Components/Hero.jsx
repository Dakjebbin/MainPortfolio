

const Hero = () => {
  return (
    <section className=" w-full h-screen  mx-auto mt-10">
      <div className="flex flex-row items-start gap-5 max-w-7xl ml-10">
      <div className="flex flex-col justify-center items-center">
           <div className="w-4 h-4 bg-[#915eff] rounded-full"/>
           <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-violet-300"/>
           </div>

<div>
 <h1 className="text-white text-[50px] lg:leading-[98px] md:text-[80px] font-bold">Hi, I&apos;m <span className="text-[#915eff]">Nteinyem</span> </h1>
 </div>

           </div>
    </section>
        

  )
}

export default Hero