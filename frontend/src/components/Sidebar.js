import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/VpnKey';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" sx={{ color: 'black' }} /> 
        </ListItem>

        <Divider />  

        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" sx={{ color: 'black' }} />
        </ListItem>

        <Divider />  

        <ListItem button component={Link} to="/add-employee">
          <ListItemIcon>
            <KeyIcon />
          </ListItemIcon>
          <ListItemText primary="Add Employee" sx={{ color: 'black' }} /> 
        </ListItem>
        <Divider />  
      </List>
    </Drawer>
  );
};

export default Sidebar;
