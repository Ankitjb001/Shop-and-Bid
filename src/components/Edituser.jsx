

import * as React from 'react';
import { useEffect, } from 'react';
import { FormGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { getUser } from '../service/api.js';
import { useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const defaultValue={
  fname:'',
  lname:'',
  email:'',
  password:'',

}
const theme = createTheme();

const   Edituser=()=> {

 
  const onValueChange=(e)=>{
      // var x= e.target.value;
      // var y=e.target.name;
  
  // console.log(y,x);
  setUser({...user,[e.target.name]:e.target.value});
  console.log(user);
  }    
  const navigate=useNavigate();
  const { id }=useParams();

  useEffect(()=>{
           loadUserDetails();
  },[])
  const loadUserDetails=async()=>{
    const response=await getUser(id);
  }
//   const addUserDetails= async ()=>{
//       await addUser(user);
//       navigate('/view');


//   }
const [user, setUser]=useState(defaultValue);
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit User
          </Typography>
          <FormGroup></FormGroup>
          <Box  noValidate  sx={{ mt: 3 }} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                
                <TextField
                  autoComplete="ank"
                  name="fname"
                  placeholder='sdfbjbfdsfjhk'
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus 
                  onChange={(e)=>onValueChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label=""
                  name="lname"
                  value={"aszf"}
                  autoComplete="family-name"
                  onChange={(e)=>onValueChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e)=>onValueChange(e)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>onValueChange(e)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
             
              sx={{ mt: 3, mb: 2 }}
             
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </>
  );
};
export default Edituser;
