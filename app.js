const express = require('express');
const cors = require('cors');
const hospitalRoutes = require('./routes/hospitalRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/doctors', doctorRoutes);

module.exports = app;
