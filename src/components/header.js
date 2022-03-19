import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useState } from 'react';


export default function HeaderBar(){
 
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" elevation={0} style={{
            backgroundColor: "transparent",
          }}>
            <Toolbar style={{
              color: "#000000",
              justifyContent: 'space-between',
              paddingLeft: '40px',
              paddingRight: '40px'
            }}>
              <div className="font-thin text-2xl" sx={{ flexGrow: 1 }}>
                summercody.io
              </div>
              <div className="flex gap-8">
              <Typography>
                <Link sx={{
                  textDecoration: 'none',
                  color: '#838383'
                }} component={RouterLink} to="/">Home</Link>
              </Typography>
              <Typography>
                <Link sx={{
                  textDecoration: 'none',
                  color: '#838383'
                }} component={RouterLink} to="/about">About</Link>
              </Typography>
              <Typography>
                <Link sx={{
                  textDecoration: 'none',
                  color: '#838383'
                }} component={RouterLink} to="/contact">Contact</Link>
              </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }