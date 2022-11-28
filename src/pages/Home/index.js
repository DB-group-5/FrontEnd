import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from './Orders';
import PrimarySearch from '../../components/Search';


const mdTheme = createTheme();

function Home() {
    document.title = 'Home';
    return (
        <ThemeProvider theme={mdTheme}>
            <PrimarySearch />
            <Box sx={{ display: 'flex' }}>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                    
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                        </Paper>
                    </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default Home;
