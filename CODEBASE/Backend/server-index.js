//Dependancies
const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
//SESSIONB DEPENDANCIES

// Import Data
const db = require('./data/db.js');

//START WITH EXPRESS
const server = express();

//SESSION


//CUSTOME MILLEWHARE/HANDLE FUNCTIONS OR INPORTS OF
function logger(request, responce, next) {
  const { method, originalUrl } = request;
  console.log(`${method} to ${originalUrl} at ${Date(Date.now())}`);

  next();
}

//MIDDLE WARE
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

//ROUTES
//const projectRouter = require('./routes/projectRouter.js');

//ENDPOINTS
server.get('/', logger, (req, res) => {
  res.send(`<h2>GLOBAL SERVER UP ENDPOINT</h2>`);
});

//server.use('/api/projectURL', projectRouter);


//LISTEN SERVER
const port = process.env.PORT || 8000;
server.listen(port, () => console.log((`\n ** api on: ${port} ** \n`)));
