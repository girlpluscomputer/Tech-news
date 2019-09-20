import api from 'api';

const getStories = () => api.get('/topstories.json');

const getStory = id => api.get(`/item/${id}.json`);

export { getStories, getStory };
