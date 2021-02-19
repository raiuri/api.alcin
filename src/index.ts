import express from 'express';
import connection from './database/dbConnection';
connection.dbConnect();



const app = express();

app.get('/', (req, res) => {
    res.send('Helllo world');
});

export default app;