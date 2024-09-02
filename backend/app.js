
const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const { route } = require('./routes/transactions');

const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((routes) => app.use('/api/v1', require('./routes/' + routes)))

const server = () => {
  db()
  app.listen(PORT, () => {
    console.log('listening to port:', PORT)
  })
}

server()