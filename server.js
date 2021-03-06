const express = require("express");
const path = require('path')
const log = console.log;
const app = express();

// const homeRoute = require('./routes/routes')

app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())
// app.use(require('./routes'))
app.use(express.static( 'public'))

// app.use()


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  log("Server is started on port: " + PORT);
});
