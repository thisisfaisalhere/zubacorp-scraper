import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 600000,
});

export default instance;
