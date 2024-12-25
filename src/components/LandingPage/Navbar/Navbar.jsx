import{ useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => {
        setOpen(open);
    };

    const menuItems = ['Home', 'About', 'Contact'];

    return (
        <div>
            <Box>
                <AppBar sx={{ backgroundColor: 'rgba(79, 78, 79, 0.25)', borderRadius: '2%' }}>
                    <Toolbar sx={{ justifyContent: 'space-between ' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10%'}}>
                            <AccountCircleIcon sx={{ fontSize: '30px' }} />
                            <Typography>Br</Typography>
                        </Box>

                        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between",  width:"25%"}}>
                            {menuItems.map((item, index) => (
                                <Typography
                                    key={index}
                                    className="menu"
                                    sx={{ color: "white", fontFamily: "Lexend", fontWeight: "500", "&:hover": { color: "orange", cursor: "pointer" } }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>

                        {/* Hamburger menu for mobile view */}
                        <IconButton
                            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {/* Drawer for mobile menu */}
                <Drawer
                    anchor="right"
                    open={open}
                    onClose={() => toggleDrawer(false)}
                >
                    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
                        <List>
                            {menuItems.map((item, index) => (
                                <ListItem button key={index}>
                                    <ListItemText primary={item} />
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
