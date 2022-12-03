import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  document.title = 'Login';
  const navigate = useNavigate();

  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const data = ["manager", "123456"];

  return (
    <React.Fragment>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: 'url(https://res.cloudinary.com/de3dpb9o4/image/upload/v1669619737/2762370_vlvry8.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              alignItems: 'center',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 15
            }}
          >
            <Typography 
              component="h1" 
              sx={{ 
                fontSize: 35, 
                fontWeight: 600, 
                color:'RGB(25,118,210)',
                marginBottom: '5px' 
              }}
            >
              Sign in
            </Typography>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('Username is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required')
                })}
                onSubmit={(values, { setSubmitting }) => {
                  if(values.username === data[0] && values.password === data[1]){
                      navigate('/');
                  }
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
                          id="username"
                          label="UserName"
                          name="username"
                          autoComplete="username"
                          autoFocus
                          value={values.username}  
                          onChange={handleChange}                 
                          error={touched.username && Boolean(errors.username)}
                          helperText={touched.username && errors.username}
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          value={values.password}  
                          onChange={handleChange} 
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                        />
                        <FormControlLabel
                          control={<Checkbox value="remember" color="primary" />}
                          label="Remember me"
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          disabled={isSubmitting}
                        >
                          Sign In
                        </Button>
                    </Form>
                )}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
