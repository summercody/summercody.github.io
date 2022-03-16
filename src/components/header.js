import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';


export default function HeaderBar(){
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" elevation={0} style={{
            backgroundColor: "transparent",
          }}>
            <Toolbar style={{
              color: "#000000"

            }}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Summer Cody
              </Typography>
              <Typography>
                <Link href="/about">Click Me</Link>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }