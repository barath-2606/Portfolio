import { StrictMode } from "react";
import LandingScreen from "./components/LandingPage/LandingScreen/LandingScreen";
import Navbar from "./components/LandingPage/Navbar/Navbar";
import Skill from "./components/Skills/Skill";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <StrictMode>
      <div>
        <Navbar />
        <LandingScreen />
        <Skill />
        <Experience></Experience>
        <Education/>
      </div>
    </StrictMode>
  );
}

export default App;
