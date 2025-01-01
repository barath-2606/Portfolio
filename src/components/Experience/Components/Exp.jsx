import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material"
import Flattrade from "/Images/Skills/Flattrade.png"
import Project from "./Project"
import PropTypes from 'prop-types'
import './Project.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from "react";

const Exp = ({ ProjectList }) => {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 50, // Offset in px for triggering animation
      easing: 'ease-in-out', // Easing type
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
      <Box width={600} sx={{ backgroundColor: "peachpuff", borderRadius: "10px", marginX: { sm: "5%", xs: "5%" }, padding: "15px 10px" }} data-aos="fade-up">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5px" }}>
          <img src={Flattrade} height={60}></img>
          <Divider></Divider>
          <Box>
            {/* <Typography sx={{color:"black"}}>Role : Full Stack Developer</Typography>
            <Typography sx={{color:"black"}}>Company : Flattrade</Typography>
            <Typography sx={{color:"black"}}>Duration : Feb 2023 - Present</Typography> */}
            <TableContainer sx={{ marginLeft: "10px" }}>
              <Table size="small" padding="none" sx={{ [`& .${tableCellClasses.root}`]: { borderBottom: "none" } }}>
                <TableBody>
                  <TableRow sx={{ borderBottom: "none" }}>
                    <TableCell sx={{ fontWeight: "bold", padding: "2px 3px", fontFamily: "Lexend" }}> Role </TableCell>
                    <TableCell sx={{ padding: "2px 3px" }}> : </TableCell>
                    <TableCell sx={{ padding: "2px 3px", color: "#3E5879", fontWeight: "bold", fontFamily: "Lexend" }}> {ProjectList.Role} </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", padding: "2px 3px", fontFamily: "Lexend" }}> Company </TableCell>
                    <TableCell sx={{ padding: "2px 3px" }}> : </TableCell>
                    <TableCell sx={{ padding: "2px 3px", color: "#3E5879", fontWeight: "bold", fontFamily: "Lexend" }}> {ProjectList.Company} </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", padding: "2px 3px", fontFamily: "Lexend" }}> Duration </TableCell>
                    <TableCell sx={{ padding: "2px 3px" }}> : </TableCell>
                    <TableCell sx={{ padding: "2px 3px", color: "#3E5879", fontWeight: "bold", fontFamily: "Lexend" }}> {ProjectList.Duration} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginY: "10px", gap: { xs: "10px", sm: "10px" } }}>
          {ProjectList.ProjectPoints.map((item) => (
            <Project Points={item} key={item.id} />
          ))}
        </Box>
      </Box>
    </>
  )
}

Exp.propTypes = {
  ProjectList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    Role: PropTypes.string.isRequired,
    Company: PropTypes.string.isRequired,
    Duration: PropTypes.string.isRequired,
    ProjectPoints: PropTypes.arrayOf(
      PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Desc: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
};


export default Exp
