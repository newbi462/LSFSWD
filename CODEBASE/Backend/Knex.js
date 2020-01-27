//INSTALL IT:   "npm install knex sqlite3"
1) MAKE THE KNEXFILE.js
//npx knex init

2) SET THE KNEXFILE UP
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      //filename: './dev.sqlite3'
      filename: "./data/car-dealer.db3", // WHERE IS YOUR DB?
    },
    useNullAsDefault: true, // ONLY needed for SQLite

    migrations: {
        directory: "./migrations",//WHERE IS YOUR MIGRATIONS FOLDER?
    },
    seeds: {
        directory: "./seeds",//WHERE IS YOUR SEEDS FOLDER?
    },
    // SQLite will not enforce foreign key constraints by default
    // ONLY NEEDED FOR SQLITE
    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done); // tur on foreign key enforcement
        },
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

3) SETUP YOUR MIGRATIONS
//RUN: npx knex migrate:make yourTableFile
//RESULT / exsample
exports.up = function(knex) { // "cars" == name of your table to create
  return knex.schema.createTable("cars", (table) => {
    table.increments();// id column, integer, primary key, auto-increment
    table.string("vin").index().notNullable();//the VIN,
    table.string("make").index().notNullable();//make,
    table.string("model").index().notNullable();//model,
    table.integer("mileage").index().notNullable();//mileage
    table.string("transmission").index();//transmission type
    table.string("title").index();//status of the title
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
//END OF
//MAKE A FILE PER TABLE YOU NEED using the above "migrate:make"

4) SETUP YOUR DB POINTER //convention is "db.js" in the "data" folder
//START
const knex = require('knex');

const configOptions = require('../knexfile').development;//point to your "knexfile.js"

module.exports = knex(configOptions);
//END

5) START IT/ INSHIATE THE MIGRATION
//RUN: npx knex migrate:latest

6) OTINAL MAKE A SEED // see above SEEDS pointer
//START EXSAMPLE
exports.seed = function(knex, Promise) {
  return knex("cars").truncate()
    .then(function () {
      return knex("cars").insert([
        {
          vin: "vin1",
          make: "make1",
          model: "model1",
          mileage: 123456,
          transmission: "transmission type",
          title: "clean"
        },
        {
          vin: "vin2",
          make: "make2",
          model: "model2",
          mileage: 123456,
          transmission: "transmission type",
          title: "salvage"
        },

      ]);
    });
};
//END exsample
//RUN THE SEED: npx knex seed:run
