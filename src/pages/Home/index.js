import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../../redux/AxiosIntance';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      border: '1px solid black',
      borderRadius: '25px',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
}));

const mdTheme = createTheme();

function Home() {
    document.title = 'Home';
    const navigate = useNavigate();
    const [value, setValue] = React.useState(null);
    const [valueSearch, setValueSearch] = React.useState(undefined);

    const handleChangeValue = (e) => {
        setValue(e);
    }

    React.useEffect(()=>{
        async function searchName(){
            if(value){
                await AxiosInstance.get(`/api/v1/search?name=${value}`)
                .then((res)=>{
                    setValueSearch(res.data.data);
                }).catch((error)=>{
                    setValueSearch(null);
                });
            }
        }
        searchName();
    },[value]);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{mt: 2, ml: 5}}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e)=>handleChangeValue(e.target.value)}
                    />
                </Search>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Container maxWidth="lg" sx={{ mb: 4 }}>
                    <Grid container spacing={3}>
                        {value ? (
                            <Grid item xs={12}>
                                {!valueSearch ? (
                                    <CardMedia
                                        component="img"
                                        width={'50%'}
                                        src="https://res.cloudinary.com/de3dpb9o4/image/upload/v1669933131/Na_Nov_26_x1jzkt.jpg"
                                        alt="search"
                                    />
                                ):(
                                <Card sx={{mt: 2}}>
                                    <List>
                                        {valueSearch.map((value, index) => (
                                            <>
                                            <ListItem disablePadding key={index}>
                                                <ListItemButton onClick={()=>navigate(`/supplier/${value.id}`)}>
                                                    <Grid container spacing={3}>
                                                        <Grid item sm={4}>
                                                        <CardContent>
                                                            <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                                                                Supplier Name: 
                                                            </Typography>
                                                            <Typography variant="body">
                                                            {value.supplier_name}
                                                            </Typography>
                                                            <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1, mt: 2}}>
                                                                Fabric Name: 
                                                            </Typography>
                                                            <Typography variant="body" color="text.secondary">
                                                                {value.fabric_name}
                                                            </Typography>
                                                            
                                                        </CardContent>
                                                        </Grid>
                                                        <Grid item sm={4}>
                                                            <CardContent>
                                                                <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                                                                    Color:
                                                                </Typography>
                                                                <Typography variant="body" color="text.secondary">
                                                                {value.color}
                                                                </Typography>
                                                                <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1, mt: 2}}>
                                                                    Purchase Price:
                                                                </Typography>
                                                                <Typography variant="body" color="text.secondary">
                                                                {value.purchase_price}
                                                                </Typography>
                                                            </CardContent>
                                                        </Grid>
                                                        <Grid item sm={4}>
                                                            <CardContent>
                                                                <Typography variant="h2" sx={{ fontSize: 15, fontWeight: 600, pb:1}}>
                                                                    Phone Number:
                                                                </Typography>
                                                                {value.phone_number.map((phone)=>(
                                                                    <div key={phone}>
                                                                        <Typography key={phone} variant="body" color="text.secondary">
                                                                            {phone}
                                                                        </Typography>
                                                                        <br />
                                                                    </div>
                                                                ))}
                                                            </CardContent>
                                                        </Grid>
                                                    </Grid>
                                                </ListItemButton>
                                            </ListItem>
                                            <Divider />
                                            </>
                                        ))}
                                    </List>
                                </Card>
                                )}
                            </Grid>
                        ) : (
                            <Grid item xs={12}>
                                <CardMedia
                                    component="img"
                                    width={'50%'}
                                    src="https://res.cloudinary.com/de3dpb9o4/image/upload/v1669932747/37578_ve6net.jpg"
                                    alt="search"
                                />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default Home;
