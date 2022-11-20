const express = require('express');
const { connectToDb } = require('./config/db');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const taskRoutes = require('./routes/tasksRoutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// db connection 
connectToDb();

app.use('/api',todoRoutes);
app.use('/api', taskRoutes);

module.exports =  app;