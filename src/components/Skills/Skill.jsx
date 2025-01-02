// import { Box, Typography } from "@mui/material";
// import SkillCard from "./components/SkillCard";
// import Divider from '@mui/material/Divider';
// import './Skill.css'

// const Skill = () => {

//     return (
//         <>
//             <Box>
//                 <Divider><Typography variant="h5" component="span" sx={{ fontFamily: 'Chakra Petch', marginX: { md: "10%" } }}>
//                     Skills
//                 </Typography></Divider>
//             </Box>
//             <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { sm: "center", xs: "center", md: "space-between" }, marginX: { md: "10%", sm: "5%", xs: "5%" }, marginY: 2 }} >
//                 <SkillCard data-aos="zoom-in-up"
//                     Sector={"Front End"}
//                     Skill={[
//                         { key: 1, url: "/Images/Skills/HTML5.png", skillName: "HTML 5", rating: 4.5 },
//                         { key: 2, url: "/Images/Skills/CSS3.png", skillName: "CSS 3", rating: 4.5 },
//                         { key: 3, url: "/Images/Skills/JavaScript.png", skillName: "JavaScript", rating: 3.5 },
//                         { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Bootstrap", rating: 4 },
//                         { key: 5, url: "/Images/Skills/React.png", skillName: "React Js", rating: 3 },
//                         { key: 6, url: "/Images/Skills/Vue.png", skillName: "Vue Js", rating: 3.5 },
//                     ]}
//                 />

//                 <SkillCard data-aos="zoom-in-up"
//                     Sector={"Back End"}
//                     Skill={[
//                         { key: 1, url: "/Images/Skills/Python.png", skillName: "Python", rating: 3 },
//                         { key: 2, url: "/Images/Skills/Go.png", skillName: "Go Lang", rating: 3.5 },
//                         { key: 3, url: "/Images/Skills/Node1.png", skillName: "Node Js", rating: 2 },
//                         { key: 4, url: "/Images/Skills/MongoDB.png", skillName: "MongoDB", rating: 4.5 },
//                         { key: 5, url: "/Images/Skills/PostgresSQL.png", skillName: "PostgreSQL", rating: 4 },
//                         { key: 6, url: "/Images/Skills/MySQL.png", skillName: "MySQL", rating: 4.5 },
//                         // { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Postgres", rating: 4 },
//                         // { key: 5, url: "/Images/Skills/React.png", skillName: "MS SQL", rating: 4 },
//                         // { key: 6, url: "/Images/Skills/Vue.png", skillName: "MySql", rating: 4 },
//                     ]}
//                 />

//                 {/* <SkillCard
//                     Sector={"Database"}
//                     Skill={[

//                         // { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Redis", rating: 2 },
//                         // { key: 5, url: "/Images/Skills/React.png", skillName: "SQLite", rating: 4.5 },
//                         // { key: 6, url: "/Images/Skills/Vue.png", skillName: "Firebase", rating: 2 },
//                     ]}
//                 /> */}

//                 {/* <SkillCard
//                     Sector={"Libraries/Framework"}
//                     Skill={[

//                     ]}
//                 /> */}

//                 {/* <SkillCard
//                     Sector={"Cloud"}
//                     Skill={[
//                         { key: 1, url: "/Images/Skills/AWS.png", skillName: "AWS", rating: 4.5 },
//                         // { key: 2, url: "/Images/Skills/CSS3.png", skillName: "PostgreSQL", rating: 4 },
//                         // { key: 3, url: "/Images/Skills/JavaScript.png", skillName: "MySQL", rating: 4.5 },
//                         // { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Redis", rating: 2 },
//                         // { key: 5, url: "/Images/Skills/React.png", skillName: "SQLite", rating: 4.5 },
//                         // { key: 6, url: "/Images/Skills/Vue.png", skillName: "Firebase", rating: 2 },
//                     ]}
//                 /> */}

//                 <SkillCard data-aos="zoom-in-up"
//                     Sector={"Tools"}
//                     Skill={[
//                         { key: 1, url: "/Images/Skills/Git.png", skillName: "Git", rating: 4.5 },
//                         { key: 2, url: "/Images/Skills/Vscode.png", skillName: "VS Code", rating: 4 },
//                         { key: 3, url: "/Images/Skills/Postman.png", skillName: "Postman", rating: 4.5 },
//                         // { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Redis", rating: 2 },
//                         // { key: 5, url: "/Images/Skills/React.png", skillName: "SQLite", rating: 4.5 },
//                         // { key: 6, url: "/Images/Skills/Vue.png", skillName: "Firebase", rating: 2 },
//                     ]}
//                 />
//             </Box>
//         </>
//     );
// };

// export default Skill;

import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SkillCard from "./components/SkillCard";
import Divider from '@mui/material/Divider';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Skill = () => {

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 500, // Animation duration in ms
            offset: 50, // Offset in px for triggering animation
            easing: 'linear', // Easing type
            once: false, // Keep animations running every time they come into view
        });

        // Re-initialize AOS on window scroll
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Box>
                <Divider><Typography variant="h5" component="span" sx={{ fontFamily: 'Chakra Petch', marginX: { md: "10%" } }}>
                    Skills
                </Typography></Divider>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { sm: "center", xs: "center", md: "space-between" }, marginX: { md: "10%", sm: "5%", xs: "5%" }, marginY: {sm:2, xs:2, md:4} }} data-aos="zoom-in-up" >
                <SkillCard
                    Sector={"Front End"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/HTML5.png", skillName: "HTML 5", rating: 4.5 },
                        { key: 2, url: "/Images/Skills/CSS3.png", skillName: "CSS 3", rating: 4.5 },
                        { key: 3, url: "/Images/Skills/JavaScript.png", skillName: "JavaScript", rating: 3.5 },
                        { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Bootstrap", rating: 4 },
                        { key: 5, url: "/Images/Skills/React.png", skillName: "React Js", rating: 3 },
                        { key: 6, url: "/Images/Skills/Vue.png", skillName: "Vue Js", rating: 3.5 },
                    ]}
                    Animation={"zoom-in-up"}
                />

                <SkillCard
                    Sector={"Back End"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/Python.png", skillName: "Python", rating: 3 },
                        { key: 2, url: "/Images/Skills/Go.png", skillName: "Go Lang", rating: 3.5 },
                        { key: 3, url: "/Images/Skills/Node1.png", skillName: "Node Js", rating: 2 },
                        { key: 4, url: "/Images/Skills/MongoDB.png", skillName: "MongoDB", rating: 4.5 },
                        { key: 5, url: "/Images/Skills/PostgresSQL.png", skillName: "PostgreSQL", rating: 4 },
                        { key: 6, url: "/Images/Skills/MySQL.png", skillName: "MySQL", rating: 4.5 },
                    ]}
                    Animation={"zoom-in-up"}
                />

                <SkillCard
                    Sector={"Tools"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/Git.png", skillName: "Git", rating: 4.5 },
                        { key: 2, url: "/Images/Skills/Vscode.png", skillName: "VS Code", rating: 4 },
                        { key: 3, url: "/Images/Skills/Postman.png", skillName: "Postman", rating: 4.5 },
                    ]}
                    Animation={"zoom-in-up"}
                />
            </Box>
        </>
    );
};

export default Skill;
