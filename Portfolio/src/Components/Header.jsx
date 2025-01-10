import { assets } from "../assets/assets"
import { Link} from "react-router-dom"
import { MdOutlineMenuOpen } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {

  const [isRotated, setIsRotated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll])

  const mobileNavRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
  
      // Add event listener
      document.addEventListener("mousedown", handleClickOutside);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  }

  const isNavActive = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className={!scroll ? "bg-[#10031a] sticky right-0 top-0" : "w-full bg-[#23033b] bg-clip-padding backdrop-filter fixed z-50 top-0 backdrop-blur-sm bg-opacity-20 ]"}>
        <nav className="mx-12 flex justify-between items-center">
           <Link to="/">
            <div className="flex items-center">
                <div className="w-20">
                <img className="w-full" src={assets.logo} alt="logo" />
                </div>
                <div>
                <p className="text-white font-Inter text-[18px] flex cursor-pointer font-bold" >DakJebbin <span className="lg:block hidden">&nbsp;| FullStack Developer </span></p>
                </div>
            </div>
            </Link>
            
           
            <ul className= "text-white font-Inter  text-[18px] flex cursor-pointer">
                <li className="mr-6 hidden md:flex hover:text-orange-800 duration-300 hover:text-[19px]">
                  <a href="#home">Home</a>
                  </li>
                <li className="mr-6 hidden md:flex hover:text-orange-800 duration-300 hover:text-[19px]">
                  <a href="#about">About</a>
                  </li>
                <li className="mr-6 hidden md:flex hover:text-orange-800 duration-300 hover:text-[19px]">
                    <a href="#work">Work</a>
                  </li>
                <li className="mr-6 hidden md:flex hover:text-orange-800 duration-300 hover:text-[19px]">
                  <a href="#testimonial">Testimonial</a>
                  </li>
                <li className="mr-6 hidden md:flex hover:text-orange-800 duration-300 hover:text-[19px]">
                  <a href="#contact">Contact</a>
                  </li>

                  <div onClick={toggleRotation} className="md:hidden block">
                  <MdOutlineMenuOpen size={30} onClick={isNavActive} className={`transition-transform duration-500 ${isRotated ? "rotate-90" : ""}`}/>
                  </div>
            </ul>
        </nav>

        
        <nav ref={mobileNavRef}
        className={`bg-gradient-to-r z-50 from-gray-700  to-gray-900 min-w-[200px] rounded-xl absolute top-2 right-2 md:hidden 
          ${isMenuOpen ? "opacity-100 block" : "opacity-0 block"} 
          transition-all duration-500 ease-in-out`}
        style={{
          visibility: isMenuOpen ? 'visible' : 'hidden',
          }}
      >
        <ul className="text-white text-[18px] z-50  cursor-pointer font-Inter flex flex-col p-10">
        <div onClick={toggleRotation} className="md:hidden block ">
                  <IoIosCloseCircleOutline onClick={isNavActive} size={30} className={`transition-transform duration-500 ${isRotated ? "rotate-90" : ""}`}/>
                  </div>

                <li onClick={isNavActive} className="mb-6 z-50 mt-10 hover:text-orange-800 duration-300 hover:text-[19px]">
                  <a href="#home">Home</a>
                  </li>
                <li onClick={isNavActive} className="mb-6 hover:text-orange-800 duration-300 hover:text-[19px]">
                  <a href="#about">About</a>
                  </li>
                <li onClick={isNavActive} className="mb-6 hover:text-orange-800 duration-300 hover:text-[19px]">
                    <a href="#work">Work</a>
                  </li>
                <li onClick={isNavActive} className="mb-6  hover:text-orange-800 duration-300 hover:text-[19px]">
                  <a href="#testimonial">Testimonial</a>
                  </li>
                <li onClick={isNavActive} className="mb-6  hover:text-orange-800 duration-300 hover:text-[19px]">
                  <a href="#contact">Contact</a>
                  </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header