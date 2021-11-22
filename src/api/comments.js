const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getComments = () => axios.get(url);
