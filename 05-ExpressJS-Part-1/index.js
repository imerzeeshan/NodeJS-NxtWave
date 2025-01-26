const express = require('express');

const app = express();
const port = 8080;


app.get('/', (req, res) => {
    // console.log(req);  
    // console.log(res);    
    res.send("Hello World!");
});

app.get('/date', (req, res) => {
    const date = new Date;
    res.send(`Today's date is ${date}.`);
});

app.get('/page', (req, res) => {
    res.sendFile("./page.html", { root: __dirname });
});

app.listen(port, () => {
    console.log(`port listening on port ${port}.`);
});