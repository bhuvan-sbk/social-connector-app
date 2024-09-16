import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Ultimate Connector
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
        <Button color="inherit" component={Link} to="/recommendations">Recommendations</Button>
        <Button color="inherit" component={Link} to="/chat">Chat</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
