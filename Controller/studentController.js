const db = require('../utils/db-connection');

// Insert a student
exports.createStudent = (req, res) => {
    const { name, email, age } = req.body;
    const sql = "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";
    db.query(sql, [name, email, age], (err, result) => {
        if (err) return res.status(500).send(err.message);
        console.log('📥 Student inserted:', result.insertId);
        res.status(201).send("Student added successfully");
    });
};

// Get all students
exports.getStudents = (req, res) => {
    db.query("SELECT * FROM students", (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(results);
    });
};

// Get student by ID
exports.getStudentById = (req, res) => {
    db.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        if (results.length === 0) return res.status(404).send("Student not found");
        res.status(200).json(results[0]);
    });
};

// Update student
exports.updateStudent = (req, res) => {
    const id = req.params.id;
    const { name, email, age } = req.body;

    const sql = "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?";
    db.execute(sql, [name, email, age, id], (err, result) => {
        if (err) return res.status(500).send(err.message);
        if (result.affectedRows === 0) return res.status(404).send("Student not found");
        console.log(`✅ Updated student with ID ${id}`);
        res.status(200).send("Student updated successfully");
    });
};

// Delete student
exports.deleteStudent = (req, res) => {
    db.query("DELETE FROM students WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err.message);
        if (result.affectedRows === 0) return res.status(404).send("Student not found");
        console.log('❌ Student deleted:', req.params.id);
        res.status(200).send("Student deleted");
    });
};
