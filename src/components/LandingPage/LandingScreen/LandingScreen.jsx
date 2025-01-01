import { Box } from "@mui/material";
import TextComp from "./Components/TextComp";
import ImgComp from "./Components/ImgComp";
// import Grow from '@mui/material/Grow';
// import { useEffect } from 'react';

const LandingScreen = () => {
    // const [checked, setChecked] = useState(false);

    // useEffect(() => {
    //     setChecked(true);
    // }, []);

    return (
        <div>
            {/* <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}> */}
                <Box sx={{ height: { md: "100vh" }, display: "flex", alignItems: "center", justifyContent: "space-between", marginX: { md: "10%", sm:"5%" }, flexDirection: { xs: "column-reverse",sm: "column-reverse", md: "row" }, textAlign: { xs: "center", sm: "left" }, overflow: "visible", paddingY: { xs: 2, sm: 0 },marginTop:{sm:"8%", md:"0"} }}>
                    <TextComp sx={{ flex: 1, marginBottom: { xs: 2, sm: 0 }, }} data-aos="fade-right"/>
                    <ImgComp sx={{ flex: 1, width: { xs: "100%", sm: "100%", md: "100%" }, maxWidth: "100%", }} data-aos="fade-right" />
                </Box>

            {/* </Grow> */}
        </div>
    );
};

export default LandingScreen;
