import axios from 'axios';
const url = '/result' ;
export const fetchPosts = () => axios.get('/result');