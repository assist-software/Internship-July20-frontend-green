import axios from 'axios'

const instance = axios.create({
    baseURL: '//localhost:3005/'
});

export default instance;