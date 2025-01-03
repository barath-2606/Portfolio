import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from "react";


const SkillCard = (props) => {
    const { Sector, Skill, Animation } = props;

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
            <Card sx={{ width: "100%", minHeight: 290, minWidth:{md:350, sx:300,sm:300}, maxWidth: 350, background: "transparent", border: "1px solid gray", marginBottom: 3, transition:"all 0.3 linear", "&:hover": { boxShadow:"2px 2px 20px 2px white", borderColor:"white"}, marginX:{sm:"5%", xs:"0", md:"0"}}} data-aos={Animation}>

                <CardContent>
                    <Typography variant="h6" component="div" sx={{ marginBottom: 2, textAlign: { xs: "center", sm: "center", md: "left" } }}>
                        {Sector}
                    </Typography>

                    <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center" }}>
                        {Skill.map((skill) => (

                            <Grid key={skill.key} item xs={6} sm={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
                                <img src={skill.url} height={40} alt={skill.skillName} style={{ objectFit: "contain" }} />
                                <Typography component="span" sx={{ marginTop: 1 }}>
                                    {skill.skillName}
                                </Typography>
                                    <Rating value={skill.rating} precision={0.5} readOnly size="small" 
                                    icon={<StarIcon  style={{ fill: 'white', fontSize:"20px" }} />}
                                    emptyIcon={<StarBorderIcon style={{ fill: 'white', fontSize:"20px" }} />} />
                            </Grid>

                        ))}

                    </Grid>

                </CardContent>

            </Card>
        </div>
    );
};

SkillCard.propTypes = {
    Sector: PropTypes.string.isRequired,
    Skill: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            skillName: PropTypes.string.isRequired,
        })
    ).isRequired,
    Animation: PropTypes.string.isRequired,
};

export default SkillCard;
