import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Tabs,Tab} from '@mui/material';
import AddHomeIcon from "@mui/icons-material/AddHome";
import {NavLink} from 'react-router-dom';
import logo1 from '../Imgaes/logo1.png'

const Header = () => {
  const [value,setvalue]= useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#d13360'}}   position='Gap'> 
      <Toolbar>
      <img src={logo1} width={35}/>
        <Typography variant='nS'><b>Book Store</b></Typography>
        <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setvalue(val)}>
        <Tab LinkComponent={NavLink} to= '/signup' label='SignUp'/>
        <Tab LinkComponent={NavLink} to= '/signin' label='Signin'/>
        <Tab LinkComponent={NavLink} to= '/ContactPage' label='Contact Page'/>
        <Tab LinkComponent={NavLink} to= '/userprofile' label='UserProfile'/>
        </Tabs>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header