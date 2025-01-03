import { Box, Button, Divider, TextField, Typography, IconButton, Alert } from "@mui/material"
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from '@mui/material/Snackbar';

const Contact = () => {

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState("")
    const [msg, setMsg] = useState("")

    const vertical = "bottom"
    const horizontal = "center"

    const handleClose = () => {
        setOpen(false);
    };


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

    const InstaIcon = () => {
        window.open("https://www.instagram.com/bara.th_26/profilecard/?igsh=c25vcmZxNnFyNmZ2", "_blank", "noopener,noreferrer");
    }
    const TwitterIcon = () => {
        window.open("https://x.com/BarathBarath26?t=GZ54YpBYUu8fZn22aX3xMA&s=09", "_blank", "noopener,noreferrer");
    }

    const LinkedIcon = () => {
        window.open("https://www.linkedin.com/in/barathrajan-b-396553343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank", "noopener,noreferrer");
    }

    const WhatsappIcon = () => {
        window.open("https://www.example.com", "_blank", "noopener,noreferrer");
    }

    const MailIcon = () => {
        window.open("mailto:recipient@example.com?subject=Your%20Subject&body=Your%20message%20here", "_blank", "noopener,noreferrer");
    }

    const [name, setName] = useState("");
    const [toEmail, setToEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const HandleMailChange = (e) => {
        setToEmail(e.target.value)
    }

    const HandleSubjectChange = (e) => {
        setSubject(e.target.value)
    }

    const HandleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const HandleNameChange = (e) => {
        setName(e.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: name,
            to_name: toEmail,
            subject,
            message,
            reply_to: toEmail
        };

        if ((templateParams.from_name != "") && (templateParams.to_name != "") && (templateParams.subject != "") && (templateParams.message != "") && (templateParams.reply_to != "")) {
            emailjs.send("service_26etqx4", "template_zvs4y38", templateParams, "jvHvSAMbV4erUPi6-")

                .then(
                    (response) => {
                        console.log("Email sent successfully:", response);
                        setOpen(true);
                        setMode("success")
                        setStatus("Email sent successfully!");
                        setMsg("Email sent successfully!");
                    },
                    (error) => {
                        console.error("Error sending email:", error);
                        setStatus("Error sending email.");
                        setMode("error")
                        setMsg("Error sending email.");
                        setOpen(true);
                    }
                );
        }else{
            setMode("error")
            setOpen(true)
            setMsg("Invalid Details")
        }
        console.log(status)
    };

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: { md: "30px", sm: "5px", xs: "5px" }, marginBottom: "5%" }}>
                <Box sx={{ display: { sm: "none", xs: "none", md: "flex", flexDirection: "column", backgroundColor: "rgba(79, 78, 79, 0.35)", borderRadius: "15px", padding: "10px" } }} data-aos="zoom-in-up">

                    <Typography sx={{ m: 2, textAlign: "center", fontWeight: "bold", fontFamily: "Titillium web", }} variant="h4">Feel free to Contact</Typography>

                    <Typography width={550} sx={{ m: 2, textAlign: "center", color: "orange", fontFamily: "Titillium web", }}>&quot;Enjoying our website? Show your support by liking and following us for the latest updates! Your feedback and tips help us grow—share your thoughts today!&quot;</Typography>

                    <Stepper orientation="vertical" sx={{ marginX: "5%" }}>

                        <Step>
                            <StepLabel><Typography>Drop a Message</Typography></StepLabel>
                            <StepContent sx={{ marginBottom: "15px" }}><Typography color="gray">Drop your pro&apos;s and conc&apos;s about my portfolio through the form given here</Typography></StepContent>
                            {/* </Step>

                        <Step> */}
                            <StepLabel><Typography>Follow and Support</Typography></StepLabel>
                            <StepContent sx={{ marginBottom: "15px" }}><Typography color="gray">If you likes my work kindly follow me in social media accounts</Typography></StepContent>
                            {/* </Step>

                        <Step> */}
                            <StepLabel><Typography>Work Related Conversations</Typography></StepLabel>
                            <StepContent><Typography sx={{ color: "gray" }}>For work or project related conversations feel free to contact me through email</Typography></StepContent>
                        </Step>
                    </Stepper>
                    <Typography textAlign={"center"} marginTop={3} fontFamily={"Titillium Web"} variant="h6" color="orange">Thank You!</Typography>

                </Box>
                <Box sx={{ backgroundColor: "rgb(250, 242, 242)", display: "flex", flexDirection: "column", justifyContent: "center", width: "400px", borderRadius: "15px", marginX: { sm: "5%", xs: "5%", md: "0" } }} data-aos="zoom-in-up">
                    <Typography textAlign={'center'} variant="h5" sx={{ m: 1, color: "black", fontFamily: "Titillium Web", fontWeight: "bold" }}>Get In Touch</Typography>

                    {/* TextField For Enter UserName */}
                    <TextField color="black" sx={{ marginBottom: "20px", marginX: "3%", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black", border: "2px solid black" }, "&:hover fieldset": { borderColor: "black", }, "&.Mui-focused fieldset": { borderColor: "black", }, }, "& .MuiInputLabel-root": { color: "black", }, "& .MuiInputLabel-root.Mui-focused": { color: "black", }, }} label="Name" size="small" onChange={HandleNameChange} />

                    {/* TextField for Enter User Mail Id */}
                    <TextField color="black" sx={{ marginBottom: "20px", marginX: "3%", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black", border: "2px solid black" }, "&:hover fieldset": { borderColor: "black", }, "&.Mui-focused fieldset": { borderColor: "black", }, }, "& .MuiInputLabel-root": { color: "black", }, "& .MuiInputLabel-root.Mui-focused": { color: "black", }, }} label="Email" size="small" onChange={HandleMailChange} />

                    {/* TextField for enter Subject of the Mail */}
                    <TextField color="black" sx={{ marginBottom: "20px", marginX: "3%", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black", border: "2px solid black" }, "&:hover fieldset": { borderColor: "black", }, "&.Mui-focused fieldset": { borderColor: "black", }, }, "& .MuiInputLabel-root": { color: "black", }, "& .MuiInputLabel-root.Mui-focused": { color: "black", }, }} label="Subject" size="small" onChange={HandleSubjectChange} />

                    {/* TextField for enter the Message */}
                    <TextField color="black" sx={{ marginX: "3%", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "black", border: "2px solid black" }, "&:hover fieldset": { borderColor: "black", }, "&.Mui-focused fieldset": { borderColor: "black", }, }, "& .MuiInputLabel-root": { color: "black", }, "& .MuiInputLabel-root.Mui-focused": { color: "black", }, marginBottom: "10px" }} label="Message" size="small" multiline rows={5} onChange={HandleMessageChange} />

                    {/* <TextField color="white" label="Email" sx={{ marginBottom:"20px", marginX:"3%"}} size="small"></TextField>
                <TextField color="white" label="Subject" sx={{ marginBottom:"20px", marginX:"3%"}} size="small"></TextField>
                <TextField color="white" label="Message" sx={{ marginBottom:"20px", marginX:"3%"}} size="small" multiline rows={5}></TextField> */}
                    <Button sx={{ backgroundColor: "black", color: "white", marginX: "3%", border: "2px solid black", m: 1, borderRadius: "10px", "&:hover": { backgroundColor: "transparent", border: "2px solid black", color: "black" } }} onClick={sendEmail}>Send</Button>

                    <Divider><Typography color="black">Or</Typography></Divider>

                    <Box sx={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "10px", marginBottom: "10px" }}>
                        <IconButton onClick={TwitterIcon} size="small"> <XIcon sx={{ "&:hover": { fill: "orange" }, fill: "black" }} /> </IconButton>
                        <IconButton onClick={InstaIcon} size="small"> <InstagramIcon sx={{ "&:hover": { fill: "orange" }, fill: "black" }} /> </IconButton>
                        <IconButton onClick={LinkedIcon} size="small"> <LinkedInIcon sx={{ "&:hover": { fill: "orange" }, fill: "black" }} /> </IconButton>
                        <IconButton onClick={MailIcon} size="small"> <EmailIcon sx={{ "&:hover": { fill: "orange" }, fill: "black" }} /> </IconButton>
                        <IconButton onClick={WhatsappIcon} size="small"> <WhatsAppIcon sx={{ "&:hover": { fill: "orange" }, fill: "black" }} /> </IconButton>
                    </Box>
                </Box>
                <Snackbar anchorOrigin={{vertical, horizontal}} open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={mode} variant="filled" sx={{ width: '100%' }} >
                        { msg }
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}

export default Contact
