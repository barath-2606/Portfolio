/* eslint-disable react/prop-types */
import * as React from 'react';
import { Card, CardContent, CardHeader, Divider, List, ListItem, Typography, CardActions, Button } from "@mui/material"
import PropTypes from 'prop-types'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useState} from 'react'
import './Project.css'
// import CircleIcon from '@mui/icons-material/Circle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Project = ({ Points }) => {

  const AllocationAutomation = {
    Title : "Allocation Allocation",
    Objective : " Developed a robust web application for a trading company to efficiently manage client account balances",
    KeyFeatures : ["Automated Fund Allocation: Seamlessly allocates credited amounts to specific trading segments (e.g., NSE, MCX) based on credit timestamps.", "Dynamic Segment Transfers: Enables real-time transfer of funds between segments while ensuring balance consistency across exchanges.", "Accurate Reconciliation: Maintains precise synchronization of balances between client accounts and external exchanges (NSE, MCX)."],
    Impact : [" Transformed a manual process that required a 4-member team into an automated system manageable by a single individual.", "Reduced the task duration from 30 minutes to just 10 minutes, significantly boosting operational efficiency."],
    Improvement : ["Actively enhancing the system by incorporating new features and optimizing existing functionalities to ensure scalability and reliability."],
    Skills : ["Vue Js - Go Lang - Postgres - MySql - MsSql"]
  }

  const BugTracking = {
    Title : "Bug Tracking",
    Objective : "Designed and developed a web application to streamline internal workflows for employees by providing efficient tracking of help requests and bug reports.",
    KeyFeatures : ["Bug and Help Tracking: Simplifies the process for employees to raise bug reports and request assistance, ensuring quick resolution and enhanced productivity.", "Release Management: Provides an additional feature to document and manage requests during code deployment to live environments, ensuring smooth transitions."],
    Impact :["Enhanced team collaboration by centralizing bug tracking and help requests.", "Improved deployment workflows with an organized release management feature.", "Improved deployment workflows with an organized release management feature."],
    Improvement:["Actively refining the application to address evolving needs and optimize the user experience."],
    Skills : ["Vue Js - Go Lang - Postgres - MySql - MsSql"]
  }

  const[projectItem, setItem] = useState({Title:"", KeyFeatures:[],Impact:[], Improvement :[], Skills :[]})

  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setOpen(true);
    if(project == "Allocation Automation"){
      setItem(AllocationAutomation)
    }else{
      setItem(BugTracking)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card elevation={0} disablePadding sx={{ border: "1px solid gray", borderRadius: "5px", backgroundColor: "transparent", width:{md:"270px", sm:"300px", xs:"300px"} }}>
        <CardHeader title={<Typography color="black" sx={{ textAlign: "center", fontWeight: "bold", fontFamily:"Lexend" }}>{Points.Title}</Typography>}>
        </CardHeader>
        <Divider></Divider>
        <CardContent sx={{ padding: "0px" }}>
          <List disablePadding dense component="ul">

            {Points.Desc.map((item) => (
              <ListItem key={item.id} sx={{ color: "black", fontFamily:"Lexend" }}>{item}</ListItem>
            ))}

            {/* <ListItem sx={{ color: "black" }}>A trading company website that streamlined money exchanges and balance management</ListItem>
            <ListItem sx={{ color: "black" }}>Tools Used : Vue Js, Go Lang, Postgres, MsSql, MySql</ListItem> */}
          </List>
        </CardContent>
        <CardActions disableSpacing>
          <Button endIcon={<ReadMoreIcon sx={{ fill: "#3E5879", fontFamily:"Lexend" }} />} size="small" sx={{ marginLeft: { md: "5px", fontWeight: "bold", color: "#3E5879", border: "1px solid transparent", "&:hover": { backgroundColor: "transparent", border: "1px solid #3E5879" } } }} onClick={()=>handleClickOpen(Points.Title)}>Know More</Button>
        </CardActions>
      </Card>

      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description" >
        <DialogTitle sx={{ color: "#3E5879", fontWeight: "bold", fontFamily:"Lexend" }}>{projectItem.Title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography sx={{ color: "black", fontWeight: "bold", fontFamily:"Lexend" }}>Objective</Typography>
            <List sx={{ marginY: "3px" }}>
              <ListItem disablePadding sx={{color:"gray", fontFamily:"Lexend"}}>{projectItem.Objective}</ListItem>
            </List>
            
            <Typography sx={{ color: "black", fontWeight: "bold", fontFamily:"Lexend" }}>Key Features</Typography>
            <List sx={{ marginY: "3px" }}>
              {projectItem.KeyFeatures.map((item, index)=>(
                <ListItem key={index} disablePadding sx={{color:"gray", marginBottom:"5px", fontFamily:"Lexend"}}>{item}</ListItem>
              ))}
              {/* <ListItem disablePadding sx={{color:"gray", marginBottom:"5px"}}> Automated Fund Allocation: Seamlessly allocates credited amounts to specific trading segments (e.g., NSE, MCX) based on credit timestamps.</ListItem>
              <ListItem disablePadding sx={{color:"gray", marginBottom:"5px"}}>Dynamic Segment Transfers: Enables real-time transfer of funds between segments while ensuring balance consistency across exchanges.</ListItem>
              <ListItem disablePadding sx={{color:"gray"}}> Accurate Reconciliation: Maintains precise synchronization of balances between client accounts and external exchanges (NSE, MCX).</ListItem> */}
            </List>

            <Typography sx={{ color: "black", fontWeight: "bold", fontFamily:"Lexend" }}>Impact</Typography>
            <List sx={{ marginY: "3px" }}>

                {projectItem.Impact.map((item, index)=>(
                  <ListItem key={index} disablePadding sx={{color:"gray", marginBottom:"5px", fontFamily:"Lexend"}}>{item}</ListItem>
                ))}

              {/* <ListItem disablePadding sx={{color:"gray", marginBottom:"5px"}}> Transformed a manual process that required a 4-member team into an automated system manageable by a single individual.</ListItem>
              <ListItem disablePadding sx={{color:"gray", marginBottom:"5px"}}>Reduced the task duration from 30 minutes to just 10 minutes, significantly boosting operational efficiency.</ListItem> */}
            </List>

            <Typography sx={{ color: "black", fontWeight: "bold", fontFamily:"Lexend" }}>Continuous Improvement </Typography>
            <List sx={{ marginY: "3px" }}>
              {projectItem.Improvement.map((item, index)=>(
                <ListItem key={index} disablePadding sx={{color:"gray", fontFamily:"Lexend"}}>{item}</ListItem>
              ))}
              {/* <ListItem disablePadding sx={{color:"gray"}}>Reduced the task duration from 30 minutes to just 10 minutes, significantly boosting operational efficiency.</ListItem> */}
            </List>

            <Typography sx={{ color: "black", fontWeight: "bold", fontFamily:"Lexend" }}>Skills</Typography>
            <List sx={{ marginY: "3px" }}>
            {projectItem.Skills.map((item, index)=>(
                <ListItem key={index} disablePadding sx={{color:"gray", fontFamily:"Lexend"}}>{item}</ListItem>
              ))}
              {/* <ListItem disablePadding sx={{color:"gray"}}>Vue Js - Go Lang - Postgres - MySql - MsSql</ListItem> */}
            </List>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>

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
