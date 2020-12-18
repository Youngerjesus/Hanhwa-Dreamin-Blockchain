import apiInstance from "./instance.js";
import {
    MAOKAI_NFT_TOKEN_TYPE,
    MAOKAI_NFT_TOKEN_CONTRACT_ID,
    WALLET_ADDRESS,
    MY_ADDRESS,
    WALLET_SECRET_KEY,
    LINE_SERVER_URL,
    API_SECRET_KEY, ECO_TOKEN_CONTRACT_ID, MY_USER_ID
} from "./LINE_API_CONSTANT.js";
import crypto from 'crypto';

const mintNFTToken = () => {
    const nonce = Math.random().toString(36).substr(2, 8);
    const timestamp = Date.now();
    const methodType = 'POST';
    const requestPath = `/v1/item-tokens/${MAOKAI_NFT_TOKEN_CONTRACT_ID}/non-fungibles/${MAOKAI_NFT_TOKEN_TYPE}/mint`;

    const requestBody = {
        ownerAddress: WALLET_ADDRESS,
        ownerSecret: WALLET_SECRET_KEY,
        name: 'MaoKai',
        toAddress: MY_ADDRESS
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

const transferServiceToken = () => {
    const nonce = Math.random().toString(36).substr(2, 8);
    const timestamp = Date.now();
    const methodType = 'POST';
    const requestPath = `/v1/wallets/${WALLET_ADDRESS}/service-tokens/${ECO_TOKEN_CONTRACT_ID}/transfer`;

    const requestBody = {
        walletSecret: WALLET_SECRET_KEY,
        amount: '1000',
        toAddress: MY_ADDRESS
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

    console.log('transfer Service Token Success');
}


const getNFTToken = () => {
    const nonce = Math.random().toString(36).substr(2, 8);
    const timestamp = Date.now();
    const methodType = 'GET';
    // const requestPath = `/v1/item-tokens/${contractId}/non-fungibles/${tokenType}/${tokenIndex}`;

    const requestBody = {
        ownerAddress: WALLET_ADDRESS,
        ownerSecret: WALLET_SECRET_KEY,
        name: 'MaoKai',
        toAddress: MY_ADDRESS
    }

};

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

export {mintNFTToken,transferServiceToken,burnServiceToken};