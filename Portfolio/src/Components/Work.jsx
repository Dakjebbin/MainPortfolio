import  { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import axios from "axios"
import { toast } from 'react-toastify';

const Work = () => {
    const [project, setProject] = useState([]);

  const baseUrl = import.meta.env.VITE_BASEURL;

useEffect(() => {
  const fetchProjects = async () => {
    try {
  
      const response = await axios.get(`${baseUrl}/project/getProject`,{
        withCredentials:true
      })
     
      if (response?.data?.length === 0) {
        toast.error("No projects found");
        return;
      }
      
      setProject(response?.data.data); 
      

    } catch (error) {
      if (error instanceof axios.AxiosError) {
        console.log(
           error?.response?.data
         );
       } else {
         console.log("reg error => ", error);
       }
    }
  }

  
  fetchProjects();
},[])
 
  return (
    <div className='mt-16 m-auto w-[90%]' id='work'>

      <h1 className='font-Inter text-white text-2xl font-semibold text-center'>My Latest Work</h1>
      <p className='text-center text-white mt-3 font-Inter text-md'>Welcome to my web development portfolio! Explore a collection of projects showcasing my <br  className='sm:block hidden'/>expertise in full stack web development</p>


        <div>
        {project?.length < 1 ? (
          <div className="flex justify-center items-center h-full">
          <h3 className="font-bold text-orange-500 text-xl animate-pulse transition duration-200 ease-in">
            Loading.....
          </h3>
        </div>
        ) : (
          <div className='flex gap-5 z-0 flex-wrap items-center justify-center mt-14'>
            {project?.map((projectData) => {
              return (
                <div key={projectData._id}>

              <div className='sm:w-60 sm:h-60 mb-10 relative'>
              <img className="w-full hover:shadow-lg hover:shadow-[silver] duration-500 h-full object-cover rounded-xl" src={projectData.image} alt="" />

              <div className='absolute bottom-5 left-1/2 w-10/12 py-3 px-5 -translate-x-1/2 flex flex-col bg-[#e2e2e2] rounded-md hover:-translate-y-2 duration-500'>
              <p className='font-Inter text-center text-lg font-semibold'>{projectData.title}</p>

                    <div className='flex justify-between mt-1'>
              <a href={projectData.githubLink} target='_blank'>
              <FaGithub/>
              </a>

              <a href={projectData.liveLink} target='_blank'>
              <LuSend/>
              </a>
              </div>
              </div>
                 </div>

                </div>
              )
            })}
          </div>
        )}
        
        </div>
    </div>
  )
}

export default Work