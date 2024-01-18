const express = require('express');
const mysql = require('mysql');
var random_name = require('node-random-name');
const app = express();
const port = 3000;

// Configure MySQL connection
const db = mysql.createConnection({
    host: 'mysqlDB',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Define a route to fetch and display people names
app.get('/', (req, res) => {
    const insertQuery = 'INSERT INTO people (name) VALUES (?)';

    firstName = random_name({ first: true });

    db.query(insertQuery, [firstName], (err) => {
        if (err) {
            console.error('MySQL insert error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(`Inserted: ${firstName}`);
        }
    });

    const query = 'SELECT * FROM people';

    db.query(query, (err, results) => {
        if (err) {
            console.error('MySQL query error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            const peopleList = results.map((person) => person.name);
            res.send('<h1>Full Cycle</h1><br>' + peopleList);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
