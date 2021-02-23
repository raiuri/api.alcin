import { Application, application } from 'express';
import App from './index';

class Server {
    private port: number | string;
    private server: Application;

    constructor() {
        this.port = 3000 || process.env.PORT;
        this.server = application;

        this.server.listen(this.port, () => {
            console.log(`app is running at the ${this.port}`)
        })
    }
}

new Server();
new App().routes();