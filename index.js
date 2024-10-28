


// const express = require("express");
// const app = express();
// const cors = require("cors");
// const pool = require("./db");

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Add a new todo
// app.post("/todos", async (req, res) => {
//     try {
//         const { description } = req.body;

//         // Validate the description
//         if (!description || typeof description !== 'string' || description.trim() === '') {
//             return res.status(400).json({ error: 'Description is required and must be a non-empty string.' });
//         }

//         // Insert into the database
//         const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
//         console.log('Inserted Todo:', newTodo.rows[0]); // Log the inserted todo
//         res.json(newTodo.rows[0]);
//     } catch (err) {
//         console.error('Error inserting todo:', err.message);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// // Get all todos
// app.get("/todos", async (req, res) => {
//     try {
//         const allTodos = await pool.query("SELECT * FROM todo");
//         res.json(allTodos.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// // Get a specific todo
// app.get("/todos/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
//         res.json(todo.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// // Update a specific todo
// app.put("/todos/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { description } = req.body;
//         await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
//         res.json("Todo was updated");
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// // Delete a specific todo
// app.delete("/todos/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
//         res.json("Todo was deleted");
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.listen(5000, () => {
//     console.log("Server has started on port 5000");
// });




// const express = require("express");
// const app = express();
// const cors = require("cors");
// const pool = require("./db");

// app.use(cors());
// app.use(express.json());

// // Add a new todo with recurrence options
// app.post("/todos", async (req, res) => {
//     try {
//         const {
//             description,
//             recurrence_type,
//             recurrence_interval = 1,
//             recurrence_days_of_week,
//             recurrence_nth_day_of_month,
//             recurrence_start_date,
//             recurrence_end_date
//         } = req.body;

//         if (!description || typeof description !== 'string' || description.trim() === '') {
//             return res.status(400).json({ error: 'Description is required and must be a non-empty string.' });
//         }

//         const newTodo = await pool.query(
//             `INSERT INTO todo 
//             (description, recurrence_type, recurrence_interval, recurrence_days_of_week, 
//             recurrence_nth_day_of_month, recurrence_start_date, recurrence_end_date) 
//             VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
//             [
//                 description,
//                 recurrence_type,
//                 recurrence_interval,
//                 recurrence_days_of_week,
//                 recurrence_nth_day_of_month,
//                 recurrence_start_date,
//                 recurrence_end_date
//             ]
//         );

//         console.log('Inserted Todo with Recurrence:', newTodo.rows[0]);
//         res.json(newTodo.rows[0]);
//     } catch (err) {
//         console.error('Error inserting todo with recurrence:', err.message);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Update a specific todo with recurrence options
// app.put("/todos/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const {
//             description,
//             recurrence_type,
//             recurrence_interval,
//             recurrence_days_of_week,
//             recurrence_nth_day_of_month,
//             recurrence_start_date,
//             recurrence_end_date
//         } = req.body;

//         await pool.query(
//             `UPDATE todo 
//             SET description = $1, recurrence_type = $2, recurrence_interval = $3, 
//             recurrence_days_of_week = $4, recurrence_nth_day_of_month = $5, 
//             recurrence_start_date = $6, recurrence_end_date = $7 
//             WHERE todo_id = $8`,
//             [
//                 description,
//                 recurrence_type,
//                 recurrence_interval,
//                 recurrence_days_of_week,
//                 recurrence_nth_day_of_month,
//                 recurrence_start_date,
//                 recurrence_end_date,
//                 id
//             ]
//         );

//         res.json("Todo with recurrence was updated");
//     } catch (err) {
//         console.error('Error updating todo with recurrence:', err.message);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Get all todos
// app.get("/todos", async (req, res) => {
//     try {
//         const allTodos = await pool.query("SELECT * FROM todo");
//         res.json(allTodos.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// // Get a specific todo
// app.get("/todos/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
//         res.json(todo.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// // Delete a specific todo
// app.delete("/todos/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
//         res.json("Todo was deleted");
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.listen(5000, () => {
//     console.log("Server has started on port 5000");
// });



const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Add a new todo with recurrence options
app.post("/todos", async (req, res) => {
    try {
        const {
            description,
            recurrence_type,
            recurrence_interval = 1,
            recurrence_days_of_week,
            recurrence_nth_day_of_month,
            recurrence_start_date,
            recurrence_end_date
        } = req.body;

        if (!description || typeof description !== 'string' || description.trim() === '') {
            return res.status(400).json({ error: 'Description is required and must be a non-empty string.' });
        }

        const newTodo = await pool.query(
            `INSERT INTO todo 
            (description, recurrence_type, recurrence_interval, recurrence_days_of_week, 
            recurrence_nth_day_of_month, recurrence_start_date, recurrence_end_date) 
            VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [
                description,
                recurrence_type,
                recurrence_interval,
                recurrence_days_of_week,
                recurrence_nth_day_of_month,
                recurrence_start_date,
                recurrence_end_date
            ]
        );

        console.log('Inserted Todo with Recurrence:', newTodo.rows[0]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error('Error inserting todo with recurrence:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a specific todo with recurrence options
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {
            description,
            recurrence_type,
            recurrence_interval,
            recurrence_days_of_week,
            recurrence_nth_day_of_month,
            recurrence_start_date,
            recurrence_end_date
        } = req.body;

        await pool.query(
            `UPDATE todo 
            SET description = $1, recurrence_type = $2, recurrence_interval = $3, 
            recurrence_days_of_week = $4, recurrence_nth_day_of_month = $5, 
            recurrence_start_date = $6, recurrence_end_date = $7 
            WHERE todo_id = $8`,
            [
                description,
                recurrence_type,
                recurrence_interval,
                recurrence_days_of_week,
                recurrence_nth_day_of_month,
                recurrence_start_date,
                recurrence_end_date,
                id
            ]
        );

        res.json("Todo with recurrence was updated");
    } catch (err) {
        console.error('Error updating todo with recurrence:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get a specific todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a specific todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
