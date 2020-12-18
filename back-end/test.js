const crypto = require('crypto');
const randomString = Math.random().toString(36).substr(2, 8);

// console.log(randomString);

const timestamp = Date.now();

// console.log(timestamp);

const generateSignature = (nonce, timestamp, methodType, requestPath, queryString, requestBody) => {
    // const nonce = Math.random().toString(36).substr(2, 8);
    // const timestamp = Date.now();

    queryString === null ?
        queryString = '' :
        queryString = '?' + queryString;

    requestBody === null ?
        requestBody = '' :
        requestBody = ObjectToQueryString(requestBody)

    const serviceApiSecretKey = '9256bf8a-2b86-42fe-b3e0-d3079d0141fe';

    const str = nonce + timestamp + methodType + requestPath + queryString + requestBody;

    console.log("Str: " + str);

    const hmac = crypto.createHmac('sha512', serviceApiSecretKey);
    const signature = hmac.update(new Buffer(str, 'utf-8')).digest('base64');

    console.log('Signature: ' + signature);

    return signature;
}


function ObjectToQueryString(requestBody) {
    const sortableKeys = Object.keys(requestBody).sort();

    let str = '?';
    for(const key of sortableKeys){
        str = str + key + '=' + requestBody[key] + '&';
    }

    str = str.substr(0, str.length-1);
    return str;
}


