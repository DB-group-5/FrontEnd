import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TaskIcon from '@mui/icons-material/Task';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CategoryIcon from '@mui/icons-material/Category';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PaymentIcon from '@mui/icons-material/Payment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CurrentPrice from "../Supplier/CurrentPrice";
import Bolts from "../Supplier/Bolts";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

function DetailReport() {
    document.title = `Fabric Store`;
    const navigate = useNavigate();
    const SName = useParams().supplier;
    
    return(
      <Grid container spacing={2} sx={{mt:2}}>
        <Grid item sm={1}>
          <Tooltip title="Go back" sx={{ml:2}}>
            <IconButton onClick={()=>navigate(-1)}>
              <ArrowBackIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item sm={5.5} sx={{ml:1}}>
          <CardContent sx={{ paddingTop: 2, paddingBottom: 0 }}>
            <CardHeader
              avatar={
                  <Avatar aria-label="recipe"></Avatar>
              }
              title={(
                    <Box sx={{ marginTop: 0.5 }}>
                            <Typography color="primary">
                                Username
                            </Typography>
                    </Box>   
              )}
              // subheader={moment(data.createdAt).format('MMMM Do YYYY')}
            />
          </CardContent>
          <Divider />
          <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
            <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 600, pb:1}}>
              <CategoryIcon /> All of Category:
            </Typography>
          </CardContent>
          <Divider />
          <Grid container sx={{pt:2}}>
            <Grid item sm={6}>
              <CardContent sx={{ paddingTop: 1}}>
                <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                  <BusinessIcon /> Name:
                </Typography>
                <Typography variant="body">
                  Your Category Name
                </Typography>
              </CardContent>
            </Grid>
            <Grid item sm={6}>
              <CardContent sx={{ paddingTop: 1 }}>
                <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                  <ColorLensIcon /> Color:
                </Typography>
                <Typography variant="body">
                  Your Category Color
                </Typography>
              </CardContent>
            </Grid>
            <Grid item sm={6}>
              <CardContent sx={{ paddingTop: 1}}>
                <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                  <QueryBuilderIcon /> Date Supply:
                </Typography>
                <Typography variant="body">
                  Your Category Date
                </Typography>
              </CardContent>
            </Grid>
            <Grid item sm={6}>
              <CardContent sx={{ paddingTop: 1 }}>
                <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                  <PaymentIcon /> Purchase Price:
                </Typography>
                <Typography variant="body">
                  Your Category Purchase Price
                </Typography>
              </CardContent>
            </Grid>
            <Grid item sm={6}>
              <CurrentPrice />
            </Grid>
            <Grid item sm={6}>
              <Bolts />
              
            </Grid>
          </Grid>
          <Divider />
          
          
        </Grid>
          <Grid item sm={4}>
          <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 1200,
                },
              }}
            >
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200'}}>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600, pb:1}}>
                    <BusinessIcon /> Address:
                  </Typography>
                  <Typography variant="body">
                    Your address
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600, pb:1}}>
                    <PhoneIcon /> Phone Number:
                  </Typography>
                  <Typography variant="body">
                    Your phone
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600, pb:1}}>
                    <WysiwygIcon /> Mode:
                  </Typography>
                  <Typography variant="body">
                    Your mode
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600, pb:1}}>
                    <AccessTimeIcon /> Start Date Dept:
                  </Typography>
                  <Typography variant="body">
                    Your date
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600, pb:1}}>
                    <AccountBalanceIcon /> Unpaid Dept:
                  </Typography>
                  <Typography variant="body">
                    Your info
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600, pb:1}}>
                    <ManageAccountsIcon /> Office Staff:
                  </Typography>
                  <Typography variant="body">
                    Your office
                  </Typography>
                </CardContent>
              </Paper>
            </Box>
              
          </CardContent>
        </Grid>
      </Grid>
    );
}

export default DetailReport;