const express = require('express')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRoutes)

app.listen(3333)
