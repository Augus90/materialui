import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavBarItems } from './const/navBarListItems';
import { useParams, useNavigate } from 'react-router';



const Navbar = () => {
    const drawerWidth = 220;

    const navigate = useNavigate();

  return (
    <Drawer
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#101f33',
            color: 'rgba(255,255,255, 0.7)'
        },
        }}
        variant="permanent"
        anchor="left"
    >
        <Toolbar />
        <Divider />
        <List>
        {mainNavBarItems.map((item, index) => (
            <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={ () => navigate(item.route)}>
                <ListItemIcon sx={{ color: 'rgba(255,255,255, 0.7)'}}>
                {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Drawer>
  )
}

export default Navbar