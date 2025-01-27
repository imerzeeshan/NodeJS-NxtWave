const express = require('express');
const { addDays } = require('date-fns');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    const date = addDays(new Date(), 100);
    res.send(`<h1>${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</h1>`);
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}.`);
});

module.exports = app;
