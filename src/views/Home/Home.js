import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BaselineAccountCircle from 'react-md-icon/dist/BaselineAccountCircle';
import * as firebase from 'firebase/app';
import 'firebase/database';

import { Container, Navbar, Content } from './style';
import logo from '../../static/logo-primary.png';
import CardStorie from './components/card';
import Loader from '../../components/Loader';
import { getStories, getStory } from './api';

const Home = ({ currentUser }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const fetchNews = async () => {
    setLoading(true);

    const { data } = await getStories();

    const stories = await Promise.all(
      data.slice(0, 20).map(async id => {
        const { data } = await getStory(id);
        return data;
      }),
    );

    setLoading(false);
    setStories(stories);
  };

  useEffect(() => {
    fetchNews();
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

  const formatDate = time => {
    const months = [
      'January',
      'February',
      'March',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${month} - ${day} - ${year}  ${hours}:0${minutes}`;
  };

  return (
    <Container>
      <Navbar>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="user">
          <p>Samantha Nuñez</p>
          <div className="user-icon">
            <Link to="/profile">
              <BaselineAccountCircle />
            </Link>
          </div>
        </div>
      </Navbar>
      <Content>
        {loading && <Loader />}
        {stories.map(story => (
          <CardStorie
            key={story.id}
            story={story}
            formatDate={formatDate}
            addToFavorites={addToFavorites}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
