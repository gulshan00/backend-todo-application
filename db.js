const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

const createTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS todo (
            todo_id SERIAL PRIMARY KEY,
            description VARCHAR(255) NOT NULL,
            is_completed BOOLEAN DEFAULT FALSE,
            assigned_date DATE,
            recurrence_type VARCHAR(50),
            recurrence_interval INTEGER DEFAULT 1,
            recurrence_days_of_week VARCHAR(50),
            recurrence_nth_day_of_month INTEGER,
            recurrence_start_date DATE,
            recurrence_end_date DATE
        );
    `;

    try {
        await pool.query(createTableQuery);
        console.log("Table 'todo' created or already exists.");
    } catch (err) {
        console.error("Error creating table:", err.message);
    }
};

createTable();

module.exports = pool;