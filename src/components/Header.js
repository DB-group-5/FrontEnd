import React, { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function Header (){
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(()=>{
        if(!token) navigate('/login');
    },[token]);
    
    return(
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Fabric Agency
                </Typography>
            </Toolbar>
        </AppBar>
    );
}