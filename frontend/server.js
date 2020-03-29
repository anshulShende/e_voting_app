const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const https = require('https')
const port = process.env.PORT || 4000;
const app = express();
app.use(cors());

app.use("/", express.static(path.join(__dirname, 'dist/frontend')));

app.get('/getAllVoters', (req,res) => {

    http.get('http://localhost:5000/voters/', (resp) => {
        var body = [];
        resp.on('data', function (data) {
            body.push(data);
        });

        resp.on('end', function () {

            res.send(body.join(''));
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/frontend/'));
});

const server = http.createServer(app);

app.listen(port, function () {
    console.log("Server running on localhost:" + port);
})