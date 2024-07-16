const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { hostname } = require('os');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user : "root",
    host : "local",
    password: "",
    database: ""
})