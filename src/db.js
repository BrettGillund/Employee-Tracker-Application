const mysql = require('mysql2');




// console.log(mysql.createPool({user: 'root', password:'Ruby098'}))

async function EmployeeConnector() {
    const conn_options = {
        host: 'localhost',
        user: 'root',
        password: 'Gracegrace321!',
        database: 'Employee_database'
    }
    try{
        console.log('try');
        const db = await mysql.createConnection(conn_options);
        console.log(db.query('select * from Employee_database'))
        return db
    }
    catch(err) {
        console.error('caught err');
    }
}13

console.log(EmployeeConnector());


module.exports = connection;
// mysqlx://root:Gracegrace321!@localhost:${3306}/Employee_database