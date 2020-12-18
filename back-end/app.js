import {mintNFTToken, transferServiceToken} from "./API/line-blockchain-api.js";
import express from 'express';
import path from 'path';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';
import {getAccessToken} from "./API/line-login-api.js";
const port = process.env.PORT || "3030";
const app = express();

app.use(cors());
app.use(bodyParser.json());
// api
// app.use('/api',api);

app.get("/", ((req, res) => {
    res.send("hello");
}))

// getAccessToken
app.post('/api/accessToken', ((req, res) => {
    console.log(req.body.authorizationCode);
    getAccessToken(req.body.authorizationCode,res);
}))

app.get('/auth/callback', ((req, res) => {
    console.log(res.data);
}))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
    mintNFTToken();
});




