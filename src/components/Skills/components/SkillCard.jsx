import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const SkillCard = (props) => {
    const { Sector, Skill } = props;

    return (
        <div>
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 350, // Limit the card's width
                    background: "transparent",
                    border: "1px solid orange",
                    padding: 1, // Adds some spacing inside the card
                    marginBottom: 3, // Adds space between cards
                    "&:hover": {
                        boxShadow: 3, // Hover effect to add a shadow
                    },
                }}
            >
                <CardContent>
                    <Typography variant="h6" component="div" sx={{ marginBottom: 2, textAlign:{xs:"center", sm:"center", md:"left"} }}>
                        {Sector}
                    </Typography>
                    <Grid
                        container
                        spacing={2} // Space between grid items
                        sx={{
                            alignItems: "center",
                            justifyContent: "flex-start", // Align items to the start
                        }}
                    >
                        {Skill.map((skill) => (
                            <Grid
                                key={skill.key}
                                item
                                xs={6} // Ensure each skill takes up half the width on small screens
                                sm={4} // Adjust based on screen size
                                sx={{
                                    display: "flex",
                                    flexDirection: "column", // Stack the image and text
                                    alignItems: "center", // Center align items horizontally
                                    textAlign: "center", // Center align text
                                }}
                            >
                                <img
                                    src={skill.url}
                                    height={30}
                                    alt={skill.skillName}
                                    style={{
                                        objectFit: "contain", // Ensures proper image scaling
                                    }}
                                />
                                <Typography component="span" sx={{ marginTop: 1 }}>
                                    {skill.skillName}
                                </Typography>
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
