const express = require("express");
const app = express();

app.get("/marks", (req, res) => {
    const studentId = req.query.id;
    if(studentId === undefined){
        console.log("request mising ID ")
        return res.status(400).send("student ID is missing");
    }     

    console.log("Requested student ID:", studentId);

    const message = " Welcome! Marks requested for student  " + studentId;

    res.send(message);
});

app.listen(3000, () => {
    console.log("Server is ready");
});