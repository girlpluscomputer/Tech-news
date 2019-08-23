import api from 'api';

const getNews = () => api.get('/topstories.json');

export default getNews;
