import axios from 'axios';
import {LOGIN_CHANNEL_ID, LOGIN_CHANNEL_SECRET, SERVER_CALLBACK_URL} from "./CONSTANT";

const getAccessToken = (authorizationCode) => {
    axios.post('http://localhost:3030/api/accessToken',{
        authorizationCode: authorizationCode
    }).then((response) => {
        console.log(response.data);
    }).catch((reason => {
        console.log(reason);
    }))
}


const apiTest = (authorizationCode) => {
    const myHeader = new Headers();

    myHeader.append('Content-Type', 'application/x-www-form-urlencoded');

    const myRequest = new Request('https://api.line.me/v2/oauth/accessToken',{
        method: 'POST',
        headers: myHeader,
        mode: 'cors',
        body: `{"grant_type": "authorization_code","code":"${authorizationCode}","redirect_uri":"${SERVER_CALLBACK_URL}","client_id": "${LOGIN_CHANNEL_ID}", "client_secret":"${LOGIN_CHANNEL_SECRET}" }`
    });

    fetch(myRequest)
        .then((response) => {
            console.log(response);
        })
}
export {getAccessToken,apiTest};

