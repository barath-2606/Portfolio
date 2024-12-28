import { Box, Grid2, Typography } from "@mui/material"
// import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import './EduComp.css'
import PropTypes from 'prop-types'

const EduComp = (props) => {
    const { Percentage, Qualification, Institution, Year, City} = props
    return (
        <>
            {/* <Card sx={{ height: 300, width: 350, backgroundColor: "black", border: "1px solid orange", padding: "0" }}>
                <CardContent> */}
            <Box>
                <Grid2 container sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", border:"1px solid gray", paddingBottom:"10px", transition:"all 0.3 linear", "&:hover": { boxShadow:"2px 2px 20px 2px white", borderColor:"white"}, marginBottom:{sm:3, xs:3, md:0}}}>

                    <Grid2 item sx={{ gridColumn: "span 12", gridRow: "span 12", alignContent: "center", justifyItems: "center", backgroundColor:"black", padding:"20px" }}>
                        <Typography variant="h2" fontFamily={'Chakra Petch'} fontWeight={800} color="#80C4E9">{Percentage}%</Typography>
                        <Typography variant="body1">{Qualification}</Typography>
                    </Grid2>
                    <Grid2 item sx={{ gridColumn: "span 4", gridRow: "span 4", alignContent: "center", justifyItems: "center", backgroundColor:"black", padding:"2px 10px", }}>
                        <Typography>{Year}</Typography>
                        <Typography variant="body2">Year</Typography>
                    </Grid2>

                    <Grid2 item sx={{ gridColumn: "span 8", gridRow: "span 4", alignContent: "center", justifyItems: "center", backgroundColor:"black", padding:"2px 10px", borderLeft:"1px solid gray"}}>
                        <Typography>{Institution} </Typography>
                        <Typography variant="body2"> {City} </Typography>
                    </Grid2>
                    
                    {/* border: "1px solid orange" */}
                    {/* border: "1px solid orange", borderLeft: "none"  */}
                    {/* height: 180, width: 320,  */}
                </Grid2>
            </Box>
            {/* </CardContent>
            </Card> */}

        </>
    )
}

EduComp.propTypes = {
    Key : PropTypes.number,
    Percentage : PropTypes.number.isRequired,
    Qualification: PropTypes.string.isRequired,
    Institution : PropTypes.string.isRequired,
    Year : PropTypes.string.isRequired,
    City : PropTypes.string.isRequired
}

export default EduComp
