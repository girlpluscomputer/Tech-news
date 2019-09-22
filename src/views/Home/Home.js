import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BaselineAccountCircle from 'react-md-icon/dist/BaselineAccountCircle';

import { Container, Navbar, Content } from './style';
import logo from '../../static/logo-white.png';
import CardStorie from './components/card';
import Loader from '../../components/Loader';
import { getStories, getStory } from './api';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

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
          <CardStorie key={story.id} story={story} formatDate={formatDate} />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
