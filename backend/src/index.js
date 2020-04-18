const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors( {origin: 'https://bth-api-nascimento.herokuapp.com/'} ))
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3333) 
