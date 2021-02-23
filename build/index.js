"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("reflect-metadata");
// import connection from './database/dbConnection';
// connection.dbConnect();
class App {
    contructor() {
        this.app = express_1.application;
    }
    middlewares() {
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        });
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBc0U7QUFDdEUsNEJBQTBCO0FBQzFCLG9EQUFvRDtBQUNwRCwwQkFBMEI7QUFDMUIsTUFBTSxHQUFHO0lBR0wsVUFBVTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcscUJBQVcsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztJQUVYLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxHQUFHLENBQUMifQ==