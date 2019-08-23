import React, { useState, useEffect } from 'react';

import getNews from './api';

const Prueba = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async() => {
      try {
        const { data } = await getNews();

        console.log('Todo chidox');
        const newsData = [...data];
        setNews(newsData.slice(0, 20));
      } catch(error) {
        console.log('Todo mal');
      }
    }

    fetchNews();
  }, []);

  return(
    <div>Prueba</div>
  )
};

export default Prueba;
