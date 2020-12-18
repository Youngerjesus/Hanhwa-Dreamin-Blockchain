import apiInstance from "./instance.js";
import {
    NFT_TOKEN_CONTRACT_ID,
    NFT_TOKEN_TYPE,
    WALLET_ADDRESS,
    WALLET_SECRET_KEY,
    LINE_SERVER_URL,
    API_SECRET_KEY
} from "./LINE_API_CONSTANT.js";
import crypto from 'crypto';

const mintNFTToken = (requestBody) => {
    const nonce = Math.random().toString(36).substr(2, 8);
    const timestamp = Date.now();
    const methodType = 'POST';
    const requestPath = `/v1/item-tokens/${NFT_TOKEN_CONTRACT_ID}/non-fungibles/${NFT_TOKEN_TYPE}/mint`;

    requestBody = {
        ownerAddress: WALLET_ADDRESS,
        ownerSecret: WALLET_SECRET_KEY,
        toAddress: WALLET_ADDRESS,
        name: 'MovieTicket'
    }

    const signature = generateSignature(nonce, timestamp, methodType, requestPath, null, requestBody);

    const headers = {
        nonce,
        timestamp,
        signature
    }

    apiInstance.defaults.headers.common['nonce'] = headers['nonce'];
    apiInstance.defaults.headers.common['timestamp'] = headers['timestamp'];
    apiInstance.defaults.headers.common['signature'] = headers['signature'];

    apiInstance.post(LINE_SERVER_URL + requestPath, requestBody)
        .then(response => {
            console.log('then');
            console.log(response.data);
        })
        .catch((reason => {
            console.log('catch')
            console.log(reason);
        }));

    console.log('mint Success');
}

const getWalletTransactionHistory = () => {
    const nonce = Math.random().toString(36).substr(2, 8);
    const timestamp = Date.now();
    const methodType = 'GET';
    const requestPath = `/v1/wallets/${WALLET_ADDRESS}/transactions`;


}

const generateSignature = (nonce, timestamp, methodType, requestPath, queryString, requestBody) => {
    // const nonce = Math.random().toString(36).substr(2, 8);
    // const timestamp = Date.now();

    queryString === null ?
        queryString = '' :
        queryString = '?' + queryString;

    requestBody === null ?
        requestBody = '' :
        requestBody = ObjectToQueryString(requestBody)

    const serviceApiSecretKey = API_SECRET_KEY;

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

export {mintNFTToken};