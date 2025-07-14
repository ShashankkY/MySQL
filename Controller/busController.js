const db = require('../utils/db-connections');

exports.addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  const sql = "INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)";
  db.execute(sql, [busNumber, totalSeats, availableSeats], (err) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).send("Bus added successfully");
  });
};

exports.getAllBuses = (req, res) => {
    db.execute("SELECT * FROM Buses", (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(results);
    });
};

exports.getAvailableBuses = (req, res) => {
  const minSeats = req.params.seats;
  const sql = "SELECT * FROM buses WHERE availableSeats > ?";
  db.execute(sql, [minSeats], (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(results);
  });
};
