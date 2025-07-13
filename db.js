import { config } from "dotenv";
import mysql from "mysql2/promise";
config()

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USEr || 'root',
    password: '',
    database: 'classicmodels'
})

export default pool;