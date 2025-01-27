const express = require('express');

const app = express();
const port = 8080;

app.get('/gadgets',(req,res) => {
    res.sendFile("./gadgets.html",{root:__dirname});
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}.`);    
});

module.exports = app;
