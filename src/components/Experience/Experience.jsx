import Exp from "./Components/Exp"
import { Box, Typography, Divider } from "@mui/material"

const Experience = () => {

    const ExperienceDetails = [
        {
            id:1,
            Role: "Full Stack Developer",
            Company : "Flattrade",
            Duration : "Feb 2023 - Present",
            ProjectPoints : [
                {
                    Title : "Allocation Automation",
                    Desc : ["A trading company website that streamlined money exchanges and balance management", "Tools Used : Vue Js, Go Lang, Postgres, MsSql, MySql"]
                },
                {
                    Title : "Bug Tracking",
                    Desc : ["Application for employees to raise ticket for their needs", "Tools Used : Vue Js, Go Lang, Postgres, MsSql, MySql"]
                }
            ]
        }
        
    ]

    return (
        <>
            <Box>
                <Divider><Typography variant="h5" component="span" sx={{ fontFamily: 'Chakra Petch', marginX: { md: "10%" } }}>
                    Experience
                </Typography></Divider>
            </Box>
            <Box>
                <Typography variant="body1" sx={{ fontFamily: 'Chakra Petch', marginX: { md: "20%", sm:"5%", xs:"5%" }, textAlign:"center", marginY:"10px" }}>
                    Here is a glimpse into my journey as a full-stack web developer, showcasing the skills and expertise I’ve honed over time. My portfolio reflects the diverse technologies I’ve mastered and highlights my passion for creating impactful web solutions.</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                
                {ExperienceDetails.map((item) =>(
                    <Exp ProjectList={item} key={item.id}></Exp>
                ))}

                {/* <Exp></Exp> */}
            </Box>
        </>
    )
}

export default Experience
