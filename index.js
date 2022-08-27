const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/name', (req, res) => res.send({ name: 'Kevin' }));

app.listen(process.env.PORT || 3000);
