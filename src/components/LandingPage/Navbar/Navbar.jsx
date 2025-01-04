import { useState } from "react";
import { Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import {
    Typography,
    Box,
    AppBar,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import "./Navbar.css";

// eslint-disable-next-line react/prop-types
const Navbar = ({ sectionRefs }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => {
        setOpen(open);
    };

    const handleScroll = (section) => {
        // eslint-disable-next-line react/prop-types
        sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const menuItems = [
        { name: "Home", section: "home", icon: <HomeIcon/> },
        { name: "Skills", section: "skills", icon: <BuildIcon /> },
        { name: "Experience", section: "experience", icon: <WorkIcon /> },
        { name: "Education", section: "education", icon: <SchoolIcon /> },
        { name: "Contact", section: "contact", icon: <ContactMailIcon /> },
    ];

    return (
        <div>
            <Box>
                <AppBar sx={{ backgroundColor: "black", borderRadius: "2%" }}>
                    <Toolbar sx={{ justifyContent: "space-between " }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "1%" }}>
                            <img src="/Portfolio/Images/Skills/Br1.png" height={28} alt="Logo" />
                        </Box>

                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                justifyContent: "space-between",
                                width: "40%",
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <Typography
                                    key={index}
                                    onClick={() => handleScroll(item.section)}
                                    className="menu"
                                    sx={{
                                        color: "white",
                                        fontFamily: "Lexend",
                                        fontWeight: "500",
                                        "&:hover": { color: "orange", cursor: "pointer" },
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            ))}
                        </Box>
                        <IconButton
                            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {/* Drawer for mobile menu */}
                <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)} PaperProps={{
        sx: { backgroundColor: "black", color: "white" },
    }}>
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => toggleDrawer(false)}
                        onKeyDown={() => toggleDrawer(false)}
                    >
                        <List>
                            {menuItems.map((item, index) => (
                                <Box key={item}>
                                <ListItem
                                    button
                                    key={index}
                                    onClick={() => handleScroll(item.section)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText sx={{color:"black"}} primary={item.name} />
                                    <Divider orientation="horizontal"></Divider>
                                </ListItem>
                                {index < menuItems.length - 1 && <Divider sx={{ backgroundColor: "gray" }} />}
                                </Box>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </div>
    );
};

export default Navbar;
