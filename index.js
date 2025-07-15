const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
const PORT = 3000;

app.use(express.json());
app.use('/', studentRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
