const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const CLIENTE_SCHEMA = ` 
CREATE TABLE IF NOT EXISTS "CLIENTE" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(30)
    "CPF" INT(11),
    "ENDERECO" text(50),
)`


const PRODUTO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "DISCRIÇÃO" varchar(64)
);`;

function criaTabelaProduto () {
    db.run(PRODUTO_SCHEMA, (error) => {
        if (error) console.log("erro ao criar tabela de produtos");
    });
}

db.serialize( () => {
    criaTabelaProduto();
});

function criaTabelaCliente () {
    db.run(CLIENTE_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Clientes");
    });
}

db.serialize( () => {
    criaTabelaCliente();
})