'use strict';
const express = require('express');
const volleyball = require('volleyball');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
// const db = require('./db');
const PORT = process.env.PORT || 3200;
const server = app.listen(PORT, ()=>console.log(`It will soon begin to rain on port ${PORT}`))
// const io=require('socket.io')(server)


app.use(volleyball);

app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, res, next) =>
path.extname(req.path).length > 0 ?
  res.status(404).send('Not found') :
  next()
);

app.use('*', (req, res, next) =>
res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);


app.use((err, req, res, next) =>
res.status(err.status || 500).send(err.message || 'Internal server error.')
);