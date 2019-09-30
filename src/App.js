import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'firebase/auth';

import { Home, Login, Register, Profile } from './views';
import firebaseConfig from './firebaseConfig';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  const PublicRoutes = () => (
    <Switch>
      <Route
        exact
        path="/register"
        render={() => <Register setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        exact
        path="/login"
        render={() => <Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Redirect to="/login" />
    </Switch>
  );

  const PrivateRoutes = () => (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/profile" render={() => <Profile />} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      {!isAuthenticated && <PublicRoutes />}
      {isAuthenticated && <PrivateRoutes />}
    </Router>
  );
};

export default App;
