import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BusinessIcon from '@mui/icons-material/Business';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CategoryIcon from '@mui/icons-material/Category';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PaymentIcon from '@mui/icons-material/Payment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { getCustomer } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import NumbersIcon from '@mui/icons-material/Numbers';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlagIcon from '@mui/icons-material/Flag';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { pink } from '@mui/material/colors';

function DetailReport() {
  document.title = `Fabric Store`;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams().id;
  const report = useSelector(state=>state.report.customer);

  useEffect(()=>{
    getCustomer(id, dispatch);
  },[id, dispatch]);

  if(report === null){
      return(
        <Grid container spacing={2} sx={{mt:2}}>
          <Grid item sm={2}>
            <Tooltip title="Go back" sx={{ml:2}}>
              <IconButton onClick={()=>navigate(-1)}>
                <ArrowBackIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item sm={8} sx={{ml:1}}>
            <CardContent sx={{ paddingTop: 2, paddingBottom: 0 }}>
              <Skeleton variant="rounded" width={750} height={30} />
            </CardContent>
            <CardMedia
              component="img"
              sx={{width: '95%'}}
              src="https://res.cloudinary.com/de3dpb9o4/image/upload/v1670052745/20943558_a3lf2k.jpg"
              alt="search"
            />
          </Grid>
        </Grid>
      );
  } else{  
    const FullName = report[0].fullName;
    const Address = report[0].address;
    return(
      <Grid container spacing={2} sx={{mt:2}}>
        <Grid item sm={2}>
          <Tooltip title="Go back" sx={{ml:2}}>
            <IconButton onClick={()=>navigate(-1)}>
              <ArrowBackIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item sm={8} sx={{ml:1}}>
          <CardContent sx={{ paddingTop: 2, paddingBottom: 0 }}>
            <CardHeader
              avatar={
                  <Avatar aria-label="recipe"></Avatar>
              }
              title={(
                <Box sx={{ marginTop: 0.5 }}>
                  <Typography variant="h1" color="primary" sx={{ fontSize: 22, fontWeight: 600}}>
                      {FullName}
                  </Typography>
                </Box>   
              )}
            />
          </CardContent>
          <Divider />
          <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
            <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 600, pb:1}}>
              <BusinessIcon sx={{ color: pink[500] }} /> Address: {Address}
            </Typography>
          </CardContent>
          <Divider />
          <List>
            {report && report.map((value, index) => (
              <>
              <ListItem>
                <ListItemButton>
                <Grid container sx={{pt:2}}>
                  <Grid item sm={4}>
                    <CardContent sx={{ paddingTop: 1}}>
                      <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                        <CategoryIcon /> Category:
                      </Typography>
                      <Typography variant="body">
                        {value.category}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item sm={4}>
                    <CardContent sx={{ paddingTop: 1 }}>
                      <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                        <BoltIcon /> Bolt Code:
                      </Typography>
                      <Typography variant="body">
                        {value.boltCode}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item sm={4}>
                    <CardContent sx={{ paddingTop: 1 }}>
                      <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                        <NumbersIcon /> Length:
                      </Typography>
                      <Typography variant="body">
                        {value.length}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item sm={4}>
                    <CardContent sx={{ paddingTop: 1}}>
                      <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                        <QueryBuilderIcon /> Date:
                      </Typography>
                      <Typography variant="body">
                        {value.date}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item sm={4}>
                    <CardContent sx={{ paddingTop: 1 }}>
                      <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                        <PaymentIcon /> Total Price:
                      </Typography>
                      <Typography variant="body">
                        {value.totalPrice}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item sm={4}>
                    <CardContent sx={{ paddingTop: 1 }}>
                      <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                        <FlagIcon color="primary" /> Status:
                      </Typography>
                      <Typography variant="body">
                        {value.status}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item sm={4}>
                    <CardContent sx={{ paddingTop: 1 }}>
                      <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                        <ShoppingCartIcon /> Order Code:
                      </Typography>
                      <Typography variant="body">
                        {value.orderCode}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item sm={4}>
                    <CardContent sx={{ paddingTop: 1 }}>
                      <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                        <EventBusyIcon /> Reason:
                      </Typography>
                      <Typography variant="body">
                        {value.reason}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
                </ListItemButton>
              </ListItem>
              <Divider />
              </>
            ))}
          </List>
          
        </Grid>
      </Grid>
    );
  }
}

export default DetailReport;