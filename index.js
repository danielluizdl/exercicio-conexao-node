const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1343126',
    database: 'aula_conexao_node_pg'
});

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const resultado = await pool.query('select * from empresas')
        return res.json(resultado)
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3000)