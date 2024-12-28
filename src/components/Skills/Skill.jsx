import { Box, Typography } from "@mui/material";
import SkillCard from "./components/SkillCard";
import Divider from '@mui/material/Divider';
import './Skill.css'

const Skill = () => {
    return (
        <>
            <Box>
                <Divider><Typography variant="h5" component="span" sx={{ fontFamily: 'Chakra Petch', marginX: { md: "10%" } }}>
                    Skills
                </Typography></Divider>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { sm: "center", xs: "center", md: "space-between" }, marginX: { md: "10%" }, marginY: 2 }} >
                <SkillCard
                    Sector={"Front End"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/HTML5.png", skillName: "HTML 5", rating: 4.5 },
                        { key: 2, url: "/Images/Skills/CSS3.png", skillName: "CSS 3", rating: 4.5 },
                        { key: 3, url: "/Images/Skills/JavaScript.png", skillName: "JavaScript", rating: 3.5 },

                    ]}
                />

                <SkillCard
                    Sector={"Back End"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/Python.png", skillName: "Python", rating: 3 },
                        { key: 2, url: "/Images/Skills/Go.png", skillName: "Go Lang", rating: 3.5 },
                        { key: 3, url: "/Images/Skills/Node1.png", skillName: "Node Js", rating: 2 },
                        // { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Postgres", rating: 4 },
                        // { key: 5, url: "/Images/Skills/React.png", skillName: "MS SQL", rating: 4 },
                        // { key: 6, url: "/Images/Skills/Vue.png", skillName: "MySql", rating: 4 },
                    ]}
                />

                <SkillCard
                    Sector={"Database"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/MongoDB.png", skillName: "MongoDB", rating: 4.5 },
                        { key: 2, url: "/Images/Skills/PostgresSQL.png", skillName: "PostgreSQL", rating: 4 },
                        { key: 3, url: "/Images/Skills/MySQL.png", skillName: "MySQL", rating: 4.5 },
                        // { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Redis", rating: 2 },
                        // { key: 5, url: "/Images/Skills/React.png", skillName: "SQLite", rating: 4.5 },
                        // { key: 6, url: "/Images/Skills/Vue.png", skillName: "Firebase", rating: 2 },
                    ]}
                />

                <SkillCard
                    Sector={"Libraries/Framework"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/Bootstrap.png", skillName: "Bootstrap", rating: 4 },
                        { key: 2, url: "/Images/Skills/React.png", skillName: "React Js", rating: 3 },
                        { key: 3, url: "/Images/Skills/Vue.png", skillName: "Vue Js", rating: 3.5 },
                    ]}
                />

                <SkillCard
                    Sector={"Cloud"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/AWS.png", skillName: "AWS", rating: 4.5 },
                        // { key: 2, url: "/Images/Skills/CSS3.png", skillName: "PostgreSQL", rating: 4 },
                        // { key: 3, url: "/Images/Skills/JavaScript.png", skillName: "MySQL", rating: 4.5 },
                        // { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Redis", rating: 2 },
                        // { key: 5, url: "/Images/Skills/React.png", skillName: "SQLite", rating: 4.5 },
                        // { key: 6, url: "/Images/Skills/Vue.png", skillName: "Firebase", rating: 2 },
                    ]}
                />

                <SkillCard
                    Sector={"Tools"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/Git.png", skillName: "Git", rating: 4.5 },
                        { key: 2, url: "/Images/Skills/Vscode.png", skillName: "VS Code", rating: 4 },
                        { key: 3, url: "/Images/Skills/Postman.png", skillName: "Postman", rating: 4.5 },
                        // { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Redis", rating: 2 },
                        // { key: 5, url: "/Images/Skills/React.png", skillName: "SQLite", rating: 4.5 },
                        // { key: 6, url: "/Images/Skills/Vue.png", skillName: "Firebase", rating: 2 },
                    ]}
                />
            </Box>
        </>
    );
};

export default Skill;
