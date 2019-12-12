const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); 
app.set('views', path.join(__dirname, 'views'))

const router = require('./routes')

app.use('/', router)

app.listen(port, () => console.log('Online....'))