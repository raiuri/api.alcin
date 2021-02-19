import { Mongoose } from 'mongoose';

interface DbConfig {
    host?: string,
    port?: number,
    dbName?: string,
    username?: string,
    password?: string,
}

interface DbInterface {
    dbConn(param: DbConfig): string;
}

class MongooseDb implements DbInterface {
    dbConn(param: DbConfig) {
        try {
            const {
                username,
                password
            } = param;
            const conn = new Mongoose().connect(`
                mongodb+srv://${username}:${password}@cluster0.kbry1.mongodb.net/compresemfila?retryWrites=true&w=majority
            `,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true
                }
            );
            console.log('connected to db');
            return conn;
        } catch (err) {
            console.log(err)
            return err;
        }
    }
}

class PostgresDb implements DbInterface {
    dbConn(param: DbConfig) {
        return 'Postgress connection';
    }
}

class dbConnection {
    private connService;

    constructor(connService: DbInterface) {
        this.connService = connService;
    }

    dbConnect(): DbInterface {
        return this.connService;
    }
}

const connection = new dbConnection(new MongooseDb().dbConn({
    username: 'raiuri',
    password: 'Wd5X5UXRT8306noZ'
}));

export default connection;