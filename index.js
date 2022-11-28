const express = require('express')
const app = express()
const port=process.env.PORT||2000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port)