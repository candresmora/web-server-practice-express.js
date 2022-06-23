const express = require('express');
const app = express();

app.get('/', (req, res) => {
    
    res.sendFile( __dirname + '/index.html')
    res.sendFile( __dirname + '/assets/css/main.css')
})

app.listen(8080);

