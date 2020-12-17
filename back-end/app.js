const express = require("express");
const path = require("path");
const port = process.env.PORT || "3030";
const app = express();
const cors = require('cors');

app.use(cors());

// api
// app.use('/api',api);

app.get("/", ((req, res) => {
    res.send('hello');
}))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});


