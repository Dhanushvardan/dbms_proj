import mysql from "mysql";

const db = mysql.createConnection({
    host: "bqep9cvkjnoavihprvk8-mysql.services.clever-cloud.com",
    user: "uzmear4dygneazs0",
    database: "bqep9cvkjnoavihprvk8",
    password: "kaEeZImHzjozF1ZLoBZQ"
});

export default db;