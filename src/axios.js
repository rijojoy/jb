import axios from 'axios';

const instance = axios.create({

     baseURL: 'https://rijo-react.firebaseio.com/jbapi'
});

export default instance;