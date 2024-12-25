import { Box } from "@mui/material";
import TextComp from "./Components/TextComp";
import ImgComp from "./Components/ImgComp";
import Grow from '@mui/material/Grow';
import { useEffect, useState } from 'react';

const LandingScreen = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div>
            <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
                <Box sx={{ height: {md:"100vh"}, display: "flex", alignItems: "center", justifyContent: "space-between", marginX: {md:"10%"}, flexDirection: { xs: "column-reverse", sm: "row" }, textAlign: { xs: "center", sm: "left" }, overflow: "visible", paddingY: { xs: 2, sm: 0 },}}>
                    <TextComp sx={{ flex: 1, marginBottom: { xs: 2, sm: 0 }, }} />
                    <ImgComp sx={{ flex: 1, width: { xs: "100%", sm: "50%" }, maxWidth: { sm: "300px", md: "400px", lg: "500px" }}}/>
                </Box>
            </Grow>
        </div>
    );
};

export default LandingScreen;
