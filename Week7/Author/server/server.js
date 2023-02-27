const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

const port = 8000;

require('./config/author.config')

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));

const allAuthorRoutes = require('./routes/author.routes')
allAuthorRoutes(app)


app.listen(port, () => console.log(`Listening on port: ${port}`))
