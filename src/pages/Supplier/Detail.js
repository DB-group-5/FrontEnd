import React, { useEffect, useState } from "react";
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
import CurrentPrice from "./CurrentPrice";
import Bolts from "./Bolts";
import { useDispatch, useSelector } from "react-redux";
import { getSupplier } from "../../redux/apiRequest";
import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';

function DetailSupplier() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);
    const detailInfo = useSelector(state=>state.supply.supply);
    const errMsg = useSelector(state=>state.supply.errMsg);
    const id = useParams().id;
    const [error, setError] = useState(errMsg === undefined ? 0 : 1);
  
    useEffect(()=>{
      getSupplier(id, dispatch);
    },[]);
    useEffect(()=>{
      getSupplier(id, dispatch);
    },[id, dispatch, error]);

    if(detailInfo === null){
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
                <Skeleton variant="rounded" width={550} height={30} />
              </CardContent>
              <Divider />
              <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 600, pb:1}}>
                  <CategoryIcon /> All of Category:
                </Typography>
              </CardContent>
              <Divider />
              <CardMedia
                component="img"
                sx={{width: '95%'}}
                src="https://res.cloudinary.com/de3dpb9o4/image/upload/v1670052745/20943558_a3lf2k.jpg"
                alt="search"
              />
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
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={320} height={60} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={320} height={60} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={320} height={60} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={320} height={60} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={320} height={60} />
                  </Paper>
                </Box>        
              </CardContent>
            </Grid>
          </Grid>
      );
    } else {
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
            <Typography variant="h1" sx={{ fontSize: 30, fontWeight: 600, marginBottom: '5px' }}>
              {detailInfo[0].name_supplier}
            </Typography>
          </CardContent>
          <Divider />
          <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
            <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 600, pb:1}}>
              <CategoryIcon /> All of Category:
            </Typography>
          </CardContent>
          <Divider />
            {detailInfo && (detailInfo[0].category_info).map((value, index) => (
              <>
              <Grid container sx={{pt:2}}>
                <Grid item sm={6}>
                  <CardContent sx={{ paddingTop: 1}}>
                    <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                      <BusinessIcon /> Name:
                    </Typography>
                    <Typography variant="body">
                      {value.name_category}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item sm={6}>
                  <CardContent sx={{ paddingTop: 1 }}>
                    <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                      <ColorLensIcon /> Color:
                    </Typography>
                    <Typography variant="body">
                      {value.color}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item sm={6}>
                  <CardContent sx={{ paddingTop: 1}}>
                    <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                      <QueryBuilderIcon /> Date Supply:
                    </Typography>
                    <Typography variant="body">
                      {value.supplied_date}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item sm={6}>
                  <CardContent sx={{ paddingTop: 1 }}>
                    <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                      <PaymentIcon /> Purchase Price:
                    </Typography>
                    <Typography variant="body">
                      {value.purchase_price}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item sm={6}>
                  <CurrentPrice 
                    name={value.name_category}
                    code={value.source_code}
                  />
                </Grid>
                <Grid item sm={6}>
                  <Bolts 
                    name={value.name_category}
                    code={value.source_code}
                  />
                </Grid>
                </Grid>
                <Divider />
              </>
            ))}
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
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="rounded" width={320} height={60} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="rounded" width={320} height={60} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="rounded" width={320} height={60} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="rounded" width={320} height={60} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="rounded" width={320} height={60} />

                {/*
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
                    <TaskIcon /> Tax Code:
                  </Typography>
                  <Typography variant="body">
                    Your tax code
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600, pb:1}}>
                    <AccountBalanceIcon /> Bank Account:
                  </Typography>
                  <Typography variant="body">
                    Your bank
                  </Typography>
                </CardContent>
                <Divider />
                <CardContent sx={{ paddingTop: 3, paddingBottom: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600, pb:1}}>
                    <ManageAccountsIcon /> Parter Staff:
                  </Typography>
                  <Typography variant="body">
                    Your partner
                  </Typography>
                </CardContent> */}
              </Paper>
            </Box>
              
          </CardContent>
        </Grid>
      </Grid>
    );
    }
}

export default DetailSupplier;