import axios from 'axios';
import {API_KEY} from "./LINE_API_CONSTANT.js";

const apiInstance = axios.create({
    headers:{
        'service-api-key': API_KEY,
        'Content-Type': 'application/json'
    }
});

export default apiInstance;


