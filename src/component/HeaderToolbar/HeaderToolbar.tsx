import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderToolbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuIcon sx={{ marginRight: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React TypeScript App with Material-UI Next
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export { HeaderToolbar };
