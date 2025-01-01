import EduComp from "./Components/EduComp"
import { Box, Divider, Typography } from "@mui/material"

const Education = () => {
  return (
    <>
      <Box  sx={{marginY:{sm:2, xs:2, md:3}}}>
        <Divider><Typography variant="h5" component="span" sx={{ fontFamily: 'Chakra Petch', marginX: { md: "10%" } }}>
          Education
        </Typography></Divider>
      </Box>
      <Box sx={{ marginX: { md: "10%" }, display: "flex", justifyContent: {md:"space-between", sm:"center", xs:"center"}, alignItems: "center", marginY: 2, marginBottom:{sm:2, xs:2, md:8}, flexWrap:"wrap"}} >
        <EduComp key={1} Percentage={76.62} Qualification={"B.Sc Computer Science"} Institution={"Bharathidasan University"} Year={"2020 - 2024"} City={"Trichirappalli"} Animation={"fade-left"}></EduComp>
        <EduComp key={2} Percentage={65} Qualification={"HSC"} Institution={"Town Higer Sec School"} Year={"2019 - 2020"} City={"Kumbakonam"} Animation={"fade-up"}></EduComp>
        <EduComp key={3} Percentage={80.40} Qualification={"SSLC"} Institution={"Govt Higer Sec School"} Year={"2017 - 2018"} City={"Swamimalai"} Animation={"fade-right"}></EduComp>
      </Box>
    </>
  )
}

export default Education
