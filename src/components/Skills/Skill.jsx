import { Box } from "@mui/material";
import SkillCard from "./components/SkillCard";

const Skill = () => {
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap", // Ensures wrapping of cards on small screens
                    justifyContent: "space-between",
                    marginX: "5%",
                    marginY: 2, // Adds spacing around the skill section
                }}
            >
                <SkillCard
                    Sector={"Front End"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/HTML5.png", skillName: "HTML 5" },
                        { key: 2, url: "/Images/Skills/CSS3.png", skillName: "CSS 3" },
                        { key: 3, url: "/Images/Skills/JavaScript.png", skillName: "JavaScript" },
                        { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Bootstrap" },
                        { key: 5, url: "/Images/Skills/React.png", skillName: "React Js" },
                        { key: 6, url: "/Images/Skills/Vue.png", skillName: "Vue Js" },
                    ]}
                />

                <SkillCard
                    Sector={"Back End"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/HTML5.png", skillName: "Python" },
                        { key: 2, url: "/Images/Skills/CSS3.png", skillName: "Go Lang" },
                        { key: 3, url: "/Images/Skills/JavaScript.png", skillName: "Node Js" },
                        { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Postgres" },
                        { key: 5, url: "/Images/Skills/React.png", skillName: "MS SQL" },
                        { key: 6, url: "/Images/Skills/Vue.png", skillName: "MySql" },
                    ]}
                />

                <SkillCard
                    Sector={"Database"}
                    Skill={[
                        { key: 1, url: "/Images/Skills/HTML5.png", skillName: "MongoDB" },
                        { key: 2, url: "/Images/Skills/CSS3.png", skillName: "PostgreSQL" },
                        { key: 3, url: "/Images/Skills/JavaScript.png", skillName: "MySQL" },
                        { key: 4, url: "/Images/Skills/Bootstrap.png", skillName: "Redis" },
                        { key: 5, url: "/Images/Skills/React.png", skillName: "SQLite" },
                        { key: 6, url: "/Images/Skills/Vue.png", skillName: "Firebase" },
                    ]}
                />
            </Box>
        </div>
    );
};

export default Skill;
