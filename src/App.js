import React from 'react';
import RouteDom from './routers/RouterDom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  const path = useLocation().pathname;
  return (
    <div className="App">
        <CssBaseline />
        {path === '/login' ? (
          <Login></Login>
        ):(
          <Box sx={{ display: 'flex' }}>
            <Header></Header>
            <Sidebar></Sidebar>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 5 }}>
                <RouteDom></RouteDom>
                <Footer></Footer>
            </Box>
            {/* <Footer></Footer> */}
          </Box>
        )}  
    </div>
  );
}

export default App;
