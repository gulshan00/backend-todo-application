const Pool =require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password :"2576",
    host: "localhost",
    port:"5432",
    database: "todotask"

});

module.exports = pool;