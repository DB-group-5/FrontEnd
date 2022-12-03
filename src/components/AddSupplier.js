import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { useDispatch } from 'react-redux';
import { createSupplier } from '../redux/apiSupplier';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddSupllier() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    const handleCreate = (e) => {
        e.preventDefault();
        const data = '';

        createSupplier(data, dispatch);
    }

  return (
    <div>
        <Button onClick={handleClickOpen}>
            Add New  <AddHomeIcon />
        </Button>
        <Dialog
            fullScreen
            open={open}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Add New Supplier
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                Close
                </Button>
            </Toolbar>
            </AppBar>
            <List>
                <Container>
                    <Grid container justifyContent={'center'} spacing={1} sx={{ marginTop: 3 }}>
                        <Grid item xs={12} md={10}>
                            <Card sx={{ borderRadius: 2 }}>
                                <Box 
                                    sx={{
                                        alignItems: 'center',
                                        '& .MuiTextField-root': { m: 1 },
                                    }}
                                >
                                    <Typography 
                                        variant="h1"
                                        color="primary"
                                        sx={{
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontSize: 35,
                                            paddingTop: 3,
                                            paddingBottom: 3
                                        }}
                                    >
                                        Add New Imformation
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={0} md={1}></Grid>
                                        <Grid sx={{ marginRight:2 }} item xs={12} md={10}>
                                            <Formik
                                                initialValues={{
                                                    name: '',
                                                    address: '',
                                                    taxcode: '',
                                                    bankaccount: '',
                                                    phone:'',
                                                    parterID: ''
                                                }}
                                                validationSchema={Yup.object().shape({
                                                    name: Yup.string()
                                                        .min(4, 'Supply Name must be at least 4 characters')
                                                        .required('Supply Name is required'),
                                                    address: Yup.string()
                                                        .min(6, 'Address must be at least 6 characters')
                                                        .required('Address is required'),
                                                    taxcode: Yup.string()
                                                        .required('Tax Code is required'),
                                                    bankaccount: Yup.string()
                                                        .min(6, 'Must be at least 6 characters')
                                                        .required('Bank Account is required'),
                                                    phone: Yup.string()
                                                        .min(9, 'Must be at least 10 characters')
                                                        .required('Phone Number is required'),
                                                    parterID: Yup.string()
                                                        .required('Parter ID Number is required'),
                                                })}
                                                onSubmit={(values) => {
                                                    const data = '';
                                                    createSupplier(data, dispatch);
                                                    alert(JSON.stringify(values, null, 2));
                                                }}
                                                render={({ 
                                                    values,
                                                    errors,
                                                    touched,
                                                    handleChange,
                                                    handleSubmit,
                                                    isSubmitting,
                                                }) => (
                                                    <Form onSubmit={handleSubmit}>
                                                        <TextField
                                                            margin="normal"
                                                            fullWidth
                                                            id="name"
                                                            label="Supply Name"
                                                            name="name"
                                                            autoComplete="name"
                                                            autoFocus
                                                            value={values.name}  
                                                            onChange={handleChange}                 
                                                            error={touched.name && Boolean(errors.name)}
                                                            helperText={touched.name && errors.name}
                                                        />
                                                        <TextField
                                                            margin="normal"
                                                            fullWidth
                                                            name="address"
                                                            label="Address"
                                                            type="text"
                                                            id="address"
                                                            value={values.address}  
                                                            onChange={handleChange} 
                                                            error={touched.address && Boolean(errors.address)}
                                                            helperText={touched.address && errors.address}
                                                        />
                                                        <TextField
                                                            margin="normal"
                                                            fullWidth
                                                            name="taxcode"
                                                            label="Tax Code"
                                                            type="text"
                                                            id="taxcode"
                                                            value={values.taxcode}  
                                                            onChange={handleChange} 
                                                            error={touched.taxcode && Boolean(errors.taxcode)}
                                                            helperText={touched.taxcode && errors.taxcode}
                                                        />
                                                        <TextField
                                                            margin="normal"
                                                            fullWidth
                                                            name="phone"
                                                            label="Phone Number"
                                                            type="number"
                                                            id="phone"
                                                            value={values.phone}  
                                                            onChange={handleChange} 
                                                            error={touched.phone && Boolean(errors.phone)}
                                                            helperText={touched.phone && errors.phone}
                                                        />
                                                        <TextField
                                                            margin="normal"
                                                            fullWidth
                                                            name="bankaccount"
                                                            label="Bank Account"
                                                            type="number"
                                                            id="bankaccount"
                                                            value={values.bankaccount}  
                                                            onChange={handleChange} 
                                                            error={touched.bankaccount && Boolean(errors.bankaccount)}
                                                            helperText={touched.bankaccount && errors.bankaccount}
                                                        />
                                                        <TextField
                                                            margin="normal"
                                                            fullWidth
                                                            name="partername"
                                                            label="Partner ID"
                                                            type="text"
                                                            id="partername"
                                                            value={values.parterID}  
                                                            onChange={handleChange} 
                                                            error={touched.parterID && Boolean(errors.parterID)}
                                                            helperText={touched.parterID && errors.parterID}
                                                        />
                                                        <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            sx={{ mt: 3, mb: 2 }}
                                                            disabled={isSubmitting}
                                                        >
                                                            Save
                                                        </Button>
                                                    </Form>
                                                )}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </List>
      </Dialog>
    </div>
  );
}