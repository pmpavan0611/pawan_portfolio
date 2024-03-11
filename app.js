const express = require('express')
const app = express();
const path = require('path');

require('dotenv').config();

const cors = require('cors')
const bodyParser = require('body-parser');


const { PORT } = require('./app/config/config');


const buildPath = path.join(__dirname, './client/build')

app.use(express.static(buildPath))

app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.0.23:3000'],
    credentials: true,
    methods: ['POST', 'PUT', 'GET', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus:204
  }));



app.use(bodyParser.json())

const { authJWT } = require('./app/middleware/auth');
const { handleError } = require('./app/utils/helper');
// app.use(authJWT);


require('./app/router/user')(app);
require('./app/router/auth')(app);
require('./app/router/media')(app);
require('./app/router/project')(app);
require('./app/router/experience')(app);

require('./app/router/skill')(app);
require('./app/router/blog')(app);
require('./app/router/gallery')(app);


// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})



app.listen(PORT, () => console.log(`Server is running port on :${PORT}`))