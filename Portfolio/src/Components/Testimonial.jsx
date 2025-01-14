import { assets } from "../assets/assets"


const Testimonial = () => {
  return (
    <section id='testimonial' className='m-auto w-[90%]'>
            <div className="bg-gradient-to-br sm:p-20 p-9 rounded-lg from-[#0d0214] to-[#621194]">
                <p className="font-Inter text-[#c9c7c7] text-sm">WHAT OTHERS SAY</p>
                <h1 className="font-Inter text-white font-semibold sm:text-[40px] text-[30px]">Testimonials.</h1>

                <div className="flex text-white gap-5 mt-10 justify-center flex-wrap">
                    <div className="basis-72 bg-[#322938] shadow-lg shadow-black hover:-translate-y-2 duration-500 p-5 rounded-lg">
                        <p className="text-[30px] font-anton font-bold">&quot;</p>
                        <p className=" font-Inter">
                        Jebbin is an exceptionally skilled full-stack web developer who consistently delivers high-quality projects on time. His ability to design both the front-end and back-end of applications with precision is truly impressive. He is detail-oriented, creative, and constantly pushes the boundaries of what&apos;s possible.
                        </p>
                        <div className="flex mt-3 justify-between">
                            <div >
                        <p className="font-Inter">
                            @Victor Alabo
                        </p>
                        <p className="font-Inter text-[#c7c7c7]">
                            FullStack Web Developer
                        </p>
                        </div>

                        <div className="w-10">
                            <img className="w-full" src={assets.victor} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="basis-72 bg-[#322938] shadow-lg shadow-black hover:-translate-y-2 duration-500 p-5 rounded-lg">
                    <p className="text-[30px] font-anton font-bold">&quot;</p>
                        <p className="font-Inter">
                        I just wrapped up a project with Jebbin, and I’m really impressed! He brought my ideas to life with creativity and professionalism. Communication was top-notch, and he was always open to feedbacks.
                        I highly recommend working with Jebbin if you want great results..
                    </p>
                    <div className="flex mt-3 justify-between">
                            <div >
                        <p className="font-Inter">
                            @Ruby Aggo Jr
                        </p>
                        <p className="font-Inter text-[#c7c7c7]">
                            Product Designer
                        </p>
                        </div>

                        <div className="w-10">
                            <img className="w-full" src={assets.victor} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="basis-72 bg-[#322938] shadow-lg shadow-black hover:-translate-y-2 duration-500 p-5 rounded-lg">
                    <p className="text-[30px] font-anton font-bold">&quot;</p>
                        <p className=" font-Inter">
                        Jebbin is a standout full-stack developer who goes above and beyond with every project. His versatility across front-end and back-end technologies allows him to tackle complex tasks with ease. Whether working on user interfaces or handling databases and server-side logic.
                        </p>
                        <div className="flex mt-3 justify-between">
                            <div >
                        <p className="font-Inter">
                            @Victor Alabo
                        </p>
                        <p className="font-Inter text-[#c7c7c7]">
                            FullStack Web Developer
                        </p>
                        </div>

                        <div className="w-10">
                            <img className="w-full" src={assets.victor} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Testimonial