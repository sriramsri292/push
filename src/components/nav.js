import React from "react";
import './home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <div> 
               <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static" sx={{backgroundColor:'white',color:'black',height:'90px'}}>
        <Toolbar>
           
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 ,fontSize:'40px',fontFamily:'-moz-initial'}} >
          <span className="animated-text">Creative Showcase</span>
          </Typography>
          <Link to='/' style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="div" sx={{margin:'45px'  ,color:'GrayText',fontFamily:'initial'}} >
          Home
          </Typography>
          </Link >
          <Link to='/about' style={{ textDecoration: 'none' }}> 
          <Typography variant="h6" component="div" sx={{ margin:'45px',color:'GrayText' ,fontFamily:'initial'}}>
            About
          </Typography>
          </Link>
          <Link to='/resume' style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="div" sx={{ margin:'45px',color:'GrayText',fontFamily:'initial'  }}>
          Skills
          </Typography>
          </Link>
          <Link to='/project' style={{ textDecoration: 'none' }}> 
          <Typography variant="h6" component="div" sx={{ margin:'45px',color:'GrayText',fontFamily:'initial'  }}>
            Project
          </Typography>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}> 
          <Typography variant="h6" component="div" sx={{ margin:'45px',color:'GrayText',fontFamily:'initial'  }}>
           Contact
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}