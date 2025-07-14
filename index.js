const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
