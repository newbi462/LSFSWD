const db = require('../data/db.js');

module.exports = {
  arrOfCars,
}// this is where you export your helper funtions from below

function arrOfCars() {
  return db.select('*').from("cars");
}//now the
