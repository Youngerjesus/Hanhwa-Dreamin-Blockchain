const crypto = require('crypto');
const randomString = Math.random().toString(36).substr(2, 8);

// console.log(randomString);

const timestamp = Date.now();

// console.log(timestamp);

const generateSignature = () => {
    const nonce = 'Bp0IqgXE';
    const timestamp = '1581850266351';

    const methodType = 'GET'
    const requestPath = '/v1/wallets'

    let queryString = '';
    let requestBody = '';

    const serviceApiKey = '136db0ad-0fe1-456f-96a4-329be3f93036';
    const serviceApiSecretKey = '9256bf8a-2b86-42fe-b3e0-d3079d0141fe';

    const str = nonce + timestamp + methodType + requestPath + queryString + requestBody;

    console.log('Str:' + str);

    const hmac = crypto.createHmac('sha512', serviceApiSecretKey);
    const signature = hmac.update(new Buffer(str, 'utf-8')).digest('base64');

    console.log(signature);
}

// generateSignature();

console.log(__dirname);