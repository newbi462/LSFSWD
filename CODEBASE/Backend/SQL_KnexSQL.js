//FOR KNEX LINK TO YOUR DB CONFIG
const db = require("../data/db-config.js");


//GET A TABLE
SELECT * FROM tableName;
// "*" == all, you can replace this with the key of the col you want
db.select("*").from("tableName");
//IN knex

//FILTER BY KEY VALUE OR MATCH
SELECT * FROM tableName WHERE key="value";
//or in knex
db("tableName").where({ key: "value" })


//JOIN or get date by way of a forwin key that "relates" to another table
SELECT tableName.colKey, table2Name.colKey FROM tableName //the colomes you want to result to out put
JOIN table2Name ON tableName.table2ID = table2Name.id;
//NOTE of you have what is a key word for SQL like "order" you need to use [] notation [order]
//IN KNEX
db("tableName")
.join("table2Name", "tableName.table2ID", "table2Name.id" )
.select("tableName.colKey", "table2Name.colKey");
//NOTE order is reveresed for Knex mthod dependancy
