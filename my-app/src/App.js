import {useEffect, useState} from "react";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";

import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import LineGradient from "./components/LineGradient";
import {motion} from "framer-motion"


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage]= useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
          <Projects/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
        >
          <Testimonials />
        </motion.div>
    </div>
    </div>
    
  );
}

export default App;
