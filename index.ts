import './models';

import express from 'express';
import cors from 'cors';
import Connection from './database/DatabaseConnection';
import Controllers from './controllers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(new Controllers().initRoutes());

app.listen(3000, () => {
    console.log('Sistema rodando na porta 3000');
    Connection.sync();
});