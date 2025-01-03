import { Box, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './TextComp.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';


const TextComp = () => {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 500, // Animation duration in ms
      offset: 50, // Offset in px for triggering animation
      easing: 'linear', // Easing type
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
    <div>
      <Box sx={{ width: { md: "80%" }, marginTop: { xs: "20px", md: "50px" }, display: "flex", flexDirection: "column", justifyContent: "center", paddingX: { xs: 2, sm: 0 } }} data-aos="zoom-in-up">
        <Box sx={{ marginBottom: "10px" }}>
          <Typography variant="h6" sx={{ textAlign: { xs: "center", sm: "center", md: "Left" }, fontFamily: "Chakra Petch" }}> Hello, I&apos;m </Typography>
        </Box>

        <Box>
          <Typography variant="h2" sx={{ textAlign: { xs: "center", sm: "center", md: "Left" }, fontFamily: "Chakra Petch", fontSize: { xs: "40px", sm: "60px" }, fontWeight: "bold", color: "peachpuff" }} > Barathrajan! </Typography>
        </Box>

        <Box sx={{ marginBottom: "10px" }}>
          <Typography variant="h6" sx={{ textAlign: { xs: "center", sm: "center", md: "Left" }, fontFamily: "Chakra Petch" }}>
            FullStack Developer
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ textAlign: { xs: "center", sm: "center", md: "Left" }, fontFamily: "Chakra Petch", marginY: "10px", fontSize: { xs: "14px", sm: "16px" } }} > As a skilled Full Stack Developer, I specialize in building robust and scalable web applications using Vue.js for frontend development and Go (Golang) for backend services. My expertise includes creating dynamic, user-friendly interfaces and efficient backend architectures, integrating modern tools and frameworks to deliver seamless end-to-end solutions.
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ textAlign: { xs: "center", sm: "center", md: "Left" }, fontFamily: "Chakra Petch", marginY: "10px", fontSize: { xs: "14px", sm: "16px" } }} > Feel free to contact...
          </Typography>
        </Box>

        <Box>
          <Button sx={{ color: "orange", fontFamily: "Chakra Petch", border: "1px solid transparent", "&:hover": { border: "1px solid orange", backgroundColor: "rgba(255, 165, 0, 0.1)", transition: "all 0.2s linear" }, marginTop: "10px", textAlign: { sm: "center", xs: "center", md: "left" } }} endIcon={<ArrowRightAltIcon sx={{ fill: "orange" }} />}>
            Get In Touch
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default TextComp;
