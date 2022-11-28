import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer (){
    return(
        <footer>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
}