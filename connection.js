const mysql = require('mysql');

const connection = function () {
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "SECRET@123",
        database: "toConnect",
    })
    return pool;
}
const dbcon = connection();
module.exports = dbcon;