import LandingImg from '../../../../assets/landingimg.png';
import { Box } from '@mui/material';

const ImgComp = () => {
  return (
    <Box
      sx={{
        marginRight: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: 300, sm: 400, md: 500 }, // Responsive height
        width: "100%",
      }}
    >
      <img
        src={LandingImg}
        alt="Landing"
        style={{ maxWidth: "100%", height: "90%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default ImgComp;
