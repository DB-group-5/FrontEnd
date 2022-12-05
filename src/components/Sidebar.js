import React from "react";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from 'sweetalert2'
import { logoutUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";

const drawerWidth = 240;

export default function Sidebar (){
    const path = useLocation().pathname;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        navigate(`/${event}`);
    };

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout',
            allowOutsideClick: false
          }).then((result) => {
            if (result.isConfirmed) {
                logoutUser(dispatch, navigate);
            }
        })
    }

    return(
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton selected={path === '/'} onClick={(event) => handleListItemClick('', 0)}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={path === '/supplier' || selectedIndex === 1} onClick={(event) => handleListItemClick('supplier', 1)}>
                        <ListItemIcon>
                            <Inventory2Icon />
                        </ListItemIcon>
                        <ListItemText primary={"Supplier"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={path === '/report'} onClick={(event) => handleListItemClick('report', 3)}>
                        <ListItemIcon>
                            <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Report"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick('profile', 4)}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Profile"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 5} onClick={(event) => handleListItemClick('setting', 5)}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Setting"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>handleLogout()}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Drawer>
    );
}