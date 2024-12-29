/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, Divider, List, ListItem, Typography, CardActions, Button } from "@mui/material"
import PropTypes from 'prop-types'

const Project = ({ Points }) => {
  return (
    <>
      <Card elevation={0} disablePadding sx={{ border: "1px solid gray", borderRadius: "5px", backgroundColor: "transparent", width: "270px" }}>
        <CardHeader title={<Typography color="black" sx={{ textAlign: "center", fontWeight: "bold" }}>{Points.Title}</Typography>}>
        </CardHeader>
        <Divider></Divider>
        <CardContent sx={{ padding: "0px" }}>
          <List disablePadding dense component="ul">

            {Points.Desc.map((item)=>(
              <ListItem key={item.id} sx={{ color: "black" }}>{item}</ListItem>
            ))}

            {/* <ListItem sx={{ color: "black" }}>A trading company website that streamlined money exchanges and balance management</ListItem>
            <ListItem sx={{ color: "black" }}>Tools Used : Vue Js, Go Lang, Postgres, MsSql, MySql</ListItem> */}
          </List>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small">Know More</Button>
        </CardActions>
      </Card>
    </>
  )
}

Project.propTypes = {
  Points: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Desc: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired
};

export default Project
