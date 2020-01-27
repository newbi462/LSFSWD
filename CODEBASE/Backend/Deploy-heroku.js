// SEE UNIT4/node-api4-guided

//1) in "package.json"
"scripts": {
    "server": "nodemon index.js",
    "start": "node index.js"
  },
//START WILL LET HUROKU START THE SERVER


//2) YOU NEED A DYNAMIC PORT "process.env.PORT"
const port = process.env.PORT || 4000 // fix to let Huroku use dynamic port
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


//NOT FULLY EXPLAINED YET WILL COVER IN DB WEEK
//3) fix the DB path "process.env.DB_ENV"
const knex = require('knex');

const environment = process.env.DB_ENV || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);


// was NODE_ENV but this build is DB_ENV
