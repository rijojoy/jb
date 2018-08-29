import axios from 'axios';

const instance = axios.create({

     baseURL: 'https://api.sendgrid.com/v3/mail/send',
     withCredentials: true,
     headers: {
     	         'authorization': 'Bearer '+process.env.REACT_APP_SENDGRID_API_KEY,
                 'content-type' : "application/json"
     	     }
    
});

export default instance;