import axios from 'axios';

const SERVER_CALLBACK_URL = 'http://localhost:3000/auth/callback';

const LOGIN_CHANNEL_ID = '1655387804';

const LOGIN_CHANNEL_SECRET = '6f9e794f8b2f155cbf01d282908774f5';

const getAccessToken = (authorizationCode, res) => {
    console.log('getAccessToken');

    const requestBody = {
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: SERVER_CALLBACK_URL,
        client_id: LOGIN_CHANNEL_ID,
        client_secret: LOGIN_CHANNEL_SECRET
    };

    const instance = axios.create({
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    instance.post('https://api.line.me/v2/oauth/accessToken',requestBody)
        .then((response) => {
            console.log(response.data);
            res.send('success');
        })
        .catch(reason => {
            console.log(reason);
        });
}

export {getAccessToken};
