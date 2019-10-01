import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import toast from 'toast';

import { Button, Container, Loader } from '../../components';
import logo from '../../../src/static/logo-primary.png';
import Card from './style';

const Login = ({ setCurrentUser, setIsAuthenticated }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const authentication = async (email, password) => {
    setLoading(true);

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      toast.success('Welcome');
      const currentUser = firebase.auth().currentUser.uid;

      setCurrentUser(currentUser);
      setLoading(false);
      setIsAuthenticated(true);
    } catch (error) {
      const errorMessage = error.message;

      toast.danger(errorMessage);
      setLoading(false);
    }
  };

  const handleSubmit = e => {
    const { email, password } = data;

    e.preventDefault();
    authentication(email, password);
  };

  const handleChange = e => {
    const {
      target: { name, value },
    } = e;

    setData({ ...data, [name]: value });
  };

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit} className="form">
          <div className="logo-container">
            <img src={logo} alt="logo" width="90px" />
          </div>
          <div className="title">Welcome back!</div>
          <input
            id="email"
            type="text"
            name="email"
            value={data.email || ''}
            required
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            id="password"
            type="password"
            name="password"
            value={data.password || ''}
            required
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="button-container">
            <div className="some-text">
              Don't have an account? <Link to="/register">Register</Link>
            </div>
            {loading ? <Loader /> : <Button type="submit">Log in</Button>}
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
