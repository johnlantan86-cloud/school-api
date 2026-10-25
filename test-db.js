
const mysql = require("mysql2/promise");

async function testConnection() {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "school_relationship_lab"
    });

    console.log("Connected to MariaDB successfully!");

    const result = await db.query("SELECT * FROM student")
    console.log(result[0]);
    
    await db.end();

  } catch (error) {
    console.log("Connection failed:", error.message);
  }
}

testConnection();
