import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Recommendations from './components/Recommendations';
import Chat from './components/Chat';
import theme from './theme';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/recommendations" component={Recommendations} />
              <Route path="/chat" component={Chat} />
            </Switch>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
