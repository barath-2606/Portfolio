import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const SkillCard = (props) => {
    const { Sector, Skill } = props;

    return (
        <div>
            <Card sx={{ width: "100%", minHeight: 140, minWidth:350, maxWidth: 350, background: "transparent", border: "1px solid gray", marginBottom: 3, transition:"all 0.3 linear", "&:hover": { boxShadow:"2px 2px 20px 2px white", borderColor:"white"}, }}>

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
};

export default SkillCard;
