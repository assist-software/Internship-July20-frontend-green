import axios from 'axios'

const instance = axios.create({
    baseURL: '//localhost:3004/'
});

export default instance;