import LandingImg from '../../../../assets/landingimg.png';
import { Box } from '@mui/material';

const ImgComp = () => {
  return (
    <Box sx={{ marginRight: {md:"20px"}, display: "flex", justifyContent: "center", alignItems: "center", height: { xs: 300, sm: 400, md: 500 }, width: "100%", overflow: "hidden", marginTop:{xs:"20px", sm:"20px"} }}>
      <img src={LandingImg} alt="Landing" style={{ maxWidth: "100%", height: "90%", objectFit: "cover" }} />
    </Box>

  );
};

export default ImgComp;
