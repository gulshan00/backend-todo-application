CREATE DATABASE todotask;

-- CREATE TABLE  todo(
--     todo_id SERIAL PRIMARY KEY,
--     description VARCHAR(255)
-- )

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    is_completed BOOLEAN DEFAULT FALSE,
    assigned_date DATE
);


ALTER TABLE todo
ADD COLUMN recurrence_type VARCHAR(50),        
ADD COLUMN recurrence_interval INTEGER DEFAULT 1, 
ADD COLUMN recurrence_days_of_week VARCHAR(50),    
ADD COLUMN recurrence_nth_day_of_month INTEGER,     
ADD COLUMN recurrence_start_date DATE,
ADD COLUMN recurrence_end_date DATE;
