import { Sequelize } from "sequelize";

const database = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'avaliacao-cs',
    username: 'aluno',
    password: 'mysql'
});

export default database;
