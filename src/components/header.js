import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';



export default function HeaderBar(){

  const location = useLocation();
 
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" elevation={0} style={{
            backgroundColor: "transparent",
            // opacity: '40%'
          }}>
            <Toolbar style={{
              color: "#000000",
              justifyContent: 'space-between',
              paddingLeft: '40px',
              paddingRight: '40px'
            }}>
              <a href="https://github.com/summercody" target="_blank" rel="noopener noreferrer" style={{ flexGrow: 1, color: (location.pathname.includes("about") || location.pathname.includes("contact")) ? "#3b3b3b" :  "white", fontWeight: 500}}>
                🏡summercody.io
              </a>
              <div className="flex gap-8">
              <Typography>
                <Link sx={{
                  textDecoration: 'none',
                  color: (location.pathname.includes("about") || location.pathname.includes("contact")) ? "#3b3b3b" :  "#d3d3d3",
                  fontWeight: '500'
                }} component={RouterLink} to="/">Home</Link>
              </Typography>
              <Typography>
                <Link sx={{
                  textDecoration: 'none',
                  // color: '#838383',
                  color: (location.pathname.includes("about") || location.pathname.includes("contact")) ? "#3b3b3b" :  "#d3d3d3",
                  fontWeight: '500'
                }} component={RouterLink} to="/about">About</Link>
              </Typography>
              <Typography>
                <Link sx={{
                  textDecoration: 'none',
                  color: (location.pathname.includes("about") || location.pathname.includes("contact")) ? "#3b3b3b" :  "#d3d3d3",
                  fontWeight: '500'
                }} component={RouterLink} to="/contact">Contact</Link>
              </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }