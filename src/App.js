import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'firebase/auth';
import 'firebase/database';

import { Home, Login, Register, Profile } from './views';
import firebaseConfig from './firebaseConfig';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  const addToFavorites = idFavorite => {
    if (!favorites.includes(idFavorite)) {
      setFavorites([...favorites, idFavorite]);
    }

    const usersRef = firebase.database().ref('users/');
    usersRef
      .child(currentUser)
      .child('favorites')
      .push(idFavorite);
  };

  const PublicRoutes = () => (
    <Switch>
      <Route
        exact
        path="/register"
        render={() => (
          <Register
            setCurrentUser={setCurrentUser}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <Login
            setCurrentUser={setCurrentUser}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
      />
      <Redirect to="/login" />
    </Switch>
  );

  const PrivateRoutes = () => (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Home currentUser={currentUser} addToFavorites={addToFavorites} />
        )}
      />
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
