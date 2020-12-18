import {mintNFTToken} from "./API/line-blockchain-api.js";
import express from 'express';
import path from 'path';
import cors from 'cors';
const port = process.env.PORT || "3030";
const app = express();


app.use(cors());

// api
// app.use('/api',api);

app.get("/", ((req, res) => {
    res.send("hello");
}))

// Test
app.get('/api', ((req, res) => {
    res.send("success");
}))

app.get('/auth/callback', ((req, res) => {
    console.log(res.data);
}))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});


