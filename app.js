const express = require('express');
const { connectToDb } = require('./config/db');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const taskRoutes = require('./routes/tasksRoutes');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// db connection 
connectToDb();

app.use('/api',todoRoutes);
app.use('/api', taskRoutes);
app.use('/api/v1', userRoutes);

module.exports =  app;