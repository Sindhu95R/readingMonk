import axios from 'axios';

export default axios.create({
    baseURL: 'api',
    headers: {
        'Access-Control-Allow-Origin':'api',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Auth-Token',
        'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
        'Access-Control-Allow-Credentials': 'true',
        
    }
}
);