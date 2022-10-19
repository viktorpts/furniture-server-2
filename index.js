const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');


const connectionString = 'mongodb://localhost:27017/furniture3';

start();

async function start() {
    await mongoose.connect(connectionString);
    console.log('Database connected');

    const app = express();

    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.json({ message: 'REST service operational' });
    });

    app.use('/users', authController);
    app.use('/data/catalog', dataController);

    app.listen(3030, () => console.log('REST service started'));
}