const express = require("express");
const path = require("path");
const port = process.env.PORT || "8080";
const app = express();
const cors = require('cors');

app.use(cors());

// api
// app.use('/api',api);

app.get("/", ((req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
}))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});


