const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('Tudo Certo')
});

app.listen(3000)