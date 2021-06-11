import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/business'
});

yelp.get('/search');