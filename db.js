// const mysql = require('mysql2');
// async function EmployeeConnector() {
//     const conn_options = {
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'employee_db'
//     }
//     try{
//         console.log('try');
//         const db = await mysql.createConnection(conn_options);
//         console.log(db.query('select * from Employee_database'))
//         return db
//     }
//     catch(err) {
//         console.error('caught err');
//     }
// }

// console.log(EmployeeConnector());


// module.exports = connection;