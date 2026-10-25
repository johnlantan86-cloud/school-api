const express = require("express")
const schoolApp = express()
const mysql = require("mysql2/promise")
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "school_relationship_lab"

});

schoolApp.get("/students", async (req ,res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM student");
        res.json(rows);
    } catch (error){
        console.log( "Database error:");
        res.status(500).json({
            error: "could not retrieve students"
        });
    }
});

schoolApp.listen(3000, () => {
    console.log("server is ready");
});