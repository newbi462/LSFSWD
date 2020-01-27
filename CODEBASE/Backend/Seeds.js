//CLEAN FILl START

const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', // resets ids
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  });
};

//this is boil plat clean up you need to handle the relationships
// BUT UIT SUCKS WITH SQLITE so you may need to re sun the seed 2 or 3 times


//CLEAN FILE END

/*
NAME SEEDS

00_Clean.js
01_FirstTabel.js
01_NextTabel.js
*/

//SEED EXSAMPLE

exports.seed = function(knex, Promise) {
  return knex('tableName').truncate()
    .then(function () {
      return knex('accounts').insert([
        { name: 'tableName', budget: 4000.00 },
        { name: 'account-02', budget: 206.75 },
        { name: 'account-03', budget: 6789.00 },
        { name: 'account-04', budget: 199.99 },
        { name: 'account-05', budget: 22.34 },
        { name: 'account-06', budget: 300.00 },
        { name: 'account-07', budget: 7000.00 },
        { name: 'account-08', budget: 78800.00 },
        { name: 'account-09', budget: 3030.30 },
        { name: 'account-10', budget: 19.56 },
        { name: 'account-11', budget: 19.91 },
        { name: 'account-12', budget: 7080.00 },
        { name: 'account-13', budget: 1234.00 },
      ]);
    });
};
