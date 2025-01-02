import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
    Typography,
    Box,
    AppBar,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemText,
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
        { name: "Home", section: "home" },
        { name: "Skills", section: "skills" },
        { name: "Experience", section: "experience" },
        { name: "Education", section: "education" },
        { name: "Contact", section: "contact" },
    ];

    return (
        <div>
            <Box>
                <AppBar sx={{ backgroundColor: "black", borderRadius: "2%" }}>
                    <Toolbar sx={{ justifyContent: "space-between " }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "1%" }}>
                            <AccountCircleIcon sx={{ fontSize: "30px" }} />
                            <Typography>Br</Typography>
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
                    </Toolbar>
                </AppBar>

                {/* Drawer for mobile menu */}
                <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => toggleDrawer(false)}
                        onKeyDown={() => toggleDrawer(false)}
                    >
                        <List>
                            {menuItems.map((item, index) => (
                                <ListItem button key={index} onClick={() => handleScroll(item.section)}>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </div>
    );
};

export default Navbar;
