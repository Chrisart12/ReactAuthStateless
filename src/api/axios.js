import axios from 'axios';
import {configurations} from '../config/configuration'


export default axios.create({
    // BaseURL et non baseUrl
    baseURL: configurations.baseUrl
})
