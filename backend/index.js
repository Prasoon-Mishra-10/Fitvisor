const express = require("express");
const app = express();
const connectiontomongodb = require('./db');
const PORT = 8000;
const cors = require('cors')
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));

connectiontomongodb();

app.get('/', (req, res) => {
    res.send('Hello fitvisor');
})


app.listen(PORT, () => {
    console.log("app listening");
});



