

const Testimonial = () => {
  return (
    <section id='testimonial' className='m-auto w-[90%]'>
            <div className="bg-gradient-to-br p-20 rounded-lg from-[#0d0214] to-[#621194]">
                <p className="font-Inter text-[#c9c7c7] text-sm">WHAT OTHERS SAY</p>
                <h1 className="font-Inter text-white font-semibold text-[40px]">Testimonials.</h1>

                <div className="flex text-white gap-5 mt-10 justify-center flex-wrap">
                    <div className="basis-72 bg-">
                        <p className="text-[30px] font-anton font-bold">&quot;</p>
                        <p className="text-justify font-Inter">
                        Jebbin is an exceptionally skilled full-stack web developer who consistently delivers high-quality projects on time. His ability to design both the front-end and back-end of applications with precision is truly impressive. He is detail-oriented, creative, and constantly pushes the boundaries of what&apos;s possible.
                        </p>
                    </div>
                    <div className="basis-72">
                    <p className="text-[30px] font-anton font-bold">&quot;</p>
                        <p className="text-justify font-Inter">
                        Jebbin is a brilliant web developer with a deep understanding of full-stack technologies. His technical expertise combined with his problem-solving skills made working with him a seamless experience. He not only builds user-friendly, efficient applications but also takes the time to ensure that every project is optimized for performance.
                    </p>
                    </div>
                    <div className="basis-72">
                    <p className="text-[30px] font-anton font-bold">&quot;</p>
                        <p className="text-justify font-Inter">
                        Jebbin is a standout full-stack developer who goes above and beyond with every project. His versatility across front-end and back-end technologies allows him to tackle complex tasks with ease. Whether working on user interfaces or handling databases and server-side logic.
                        </p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Testimonial