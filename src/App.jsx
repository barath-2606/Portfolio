import { StrictMode } from "react";
import LandingScreen from "./components/LandingPage/LandingScreen/LandingScreen";
import Navbar from "./components/LandingPage/Navbar/Navbar";
import Skill from "./components/Skills/Skill";
import Education from "./components/Education/Education";

const App = () => {
  return (
    <StrictMode>
      <div>
        <Navbar />
        <LandingScreen />
        <Skill />
        <Education/>
      </div>
    </StrictMode>
  );
}

export default App;
