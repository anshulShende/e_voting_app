const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 4000;
const app = express();
app.use(cors());

app.use("/", express.static(path.join(__dirname, 'dist/frontend')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/'));
});

const server = http.createServer(app);

app.listen(port, function () {
    console.log("Server running on localhost:" + port);
})