const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://test-api.blockchain.line.me',
    headers:{
        'service-api-key': '66d022c8-154d-43ff-8f54-8bb3ca5728c0',
        'Content-Type': 'application/json'
    }
})

const getSignature= (methodName, path, requestBody) => {
    const nonce = Math.random().toString(36).substr(2, 8);
    const timestamp = Date.now();
    const serviceApiKey = '66d022c8-154d-43ff-8f54-8bb3ca5728c0';

}

export {instance, getSignature}


