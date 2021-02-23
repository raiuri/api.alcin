import { Request, Response, application, Application } from 'express';
import 'reflect-metadata';
// import connection from './database/dbConnection';
// connection.dbConnect();
class App {
    app: Application;

    contructor() {
        this.app = application;
    }

    middlewares() {

    }

    routes() {
        this.app.use('/', index.router);
    }
}

export default App;