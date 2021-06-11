import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer pbVSwm4vM6vETwitBB8TnWo4hmRrybREk_UbA1wGWdbkhzxbDFpqL6YxAuyXbNt-C5xiQAjEZApriBIqFsRq8jYQPZv82rXj2I2Q6qIkklcyajJG1uOm6y1UwOPBYHYx' 
    }
});

yelp.get('/search');