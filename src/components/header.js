import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';


export default function HeaderBar(title){
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" elevation={0} style={{
            backgroundColor: "transparent",
          }}>
            <Toolbar style={{
              color: "#000000",
              gap: "8px"
            }}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Summer Cody
              </Typography>
              <Typography>
                <Link component={RouterLink} to="/">Home</Link>
              </Typography>
              <Typography>
                <Link component={RouterLink} to="/about">About</Link>
              </Typography>
              <Typography>
                <Link component={RouterLink} to="/contact">Contact</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }