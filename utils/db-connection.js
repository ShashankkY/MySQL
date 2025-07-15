const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shashank@12',
    database: 'studentdb'
});

connection.connect(err => {
    if (err) {
        console.error('❌ DB Connection Failed:', err);
        return;
    }
    console.log('✅ Connected to MySQL');
    
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            age INT
        )
    `;
    connection.query(createTableQuery, (err) => {
        if (err) console.error('❌ Table Creation Error:', err);
        else console.log('✅ Students table ready');
    });
});

module.exports = connection;
