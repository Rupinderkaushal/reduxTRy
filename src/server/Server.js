const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"userdata"
})


app.listen(8080,()=>{console.log("app is running at 8080 port")})