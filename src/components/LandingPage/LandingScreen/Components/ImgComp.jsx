import LandingImg from '../../../../assets/landingimg.png';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const ImgComp = () => {

  useEffect(() => {
      // Initialize AOS
      AOS.init({
        duration: 500, // Animation duration in ms
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
    <Box sx={{ marginRight: {md:"20px"}, display: "flex", justifyContent: "center", alignItems: "center", height: { xs: 300, sm: 400, md: 500 }, width: "100%", overflow: "hidden", marginTop:{xs:"20px", sm:"20px"} }} data-aos="zoom-in-up">
      <img src={LandingImg} alt="Landing" style={{ maxWidth: "100%", height: "90%", objectFit: "cover" }} />
    </Box>

  );
};

export default ImgComp;
