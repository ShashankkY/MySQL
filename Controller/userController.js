const db = require('../utils/db-connections');

exports.addUser = (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.execute(sql, [name, email], (err, result) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).send("User added successfully");
  });
};

exports.getUsers = (req, res) => {
  db.execute("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(results);
  });
};
