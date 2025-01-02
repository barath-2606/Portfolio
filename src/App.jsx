import { useRef } from "react";
import Navbar from "./components/LandingPage/Navbar/Navbar";
import LandingScreen from "./components/LandingPage/LandingScreen/LandingScreen";
import Skill from "./components/Skills/Skill";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

const App = () => {
  const sectionRefs = {
    home: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  return (
    <div>
      <Navbar sectionRefs={sectionRefs} />
      <div ref={sectionRefs.home}>
        <LandingScreen />
      </div>
      <div ref={sectionRefs.skills}>
        <Skill />
      </div>
      <div ref={sectionRefs.experience}>
        <Experience />
      </div>
      <div ref={sectionRefs.education}>
        <Education />
      </div>
      <div ref={sectionRefs.contact}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
