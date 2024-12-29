import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material"
import Flattrade from "/Images/Skills/Flattrade.png"
import Project from "./Project"
import PropTypes from 'prop-types'

const Exp = ({ ProjectList }) => {
  return (
    <>
      <Box width={600} sx={{ backgroundColor: "peachpuff", borderRadius: "10px", marginX: { sm: "5%", xs: "5%" }, padding: "15px 10px" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5px" }}>
          <img src={Flattrade} height={60}></img>
          <Divider></Divider>
          <Box>
            {/* <Typography sx={{color:"black"}}>Role : Full Stack Developer</Typography>
            <Typography sx={{color:"black"}}>Company : Flattrade</Typography>
            <Typography sx={{color:"black"}}>Duration : Feb 2023 - Present</Typography> */}
            <TableContainer sx={{ marginLeft: "15px" }}>
              <Table size="small" padding="none" sx={{ [`& .${tableCellClasses.root}`]: { borderBottom: "none" } }}>
                <TableBody>
                  <TableRow sx={{ borderBottom: "none" }}>
                    <TableCell sx={{ fontWeight: "bold", padding: "2px 5px" }}> Role </TableCell>
                    <TableCell sx={{ padding: "2px 5px" }}> : </TableCell>
                    <TableCell sx={{ padding: "2px 5px", color: "#3E5879", fontWeight: "bold", }}> {ProjectList.Role} </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", padding: "2px 5px" }}> Company </TableCell>
                    <TableCell sx={{ padding: "2px 5px" }}> : </TableCell>
                    <TableCell sx={{ padding: "2px 5px", color: "#3E5879", fontWeight: "bold", }}> {ProjectList.Company} </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", padding: "2px 5px" }}> Duration </TableCell>
                    <TableCell sx={{ padding: "2px 5px" }}> : </TableCell>
                    <TableCell sx={{ padding: "2px 5px", color: "#3E5879", fontWeight: "bold", }}> {ProjectList.Duration} </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap",marginY:"10px", gap:{xs:"10px", sm:"10px"}}}>
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
