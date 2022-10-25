import express from 'express';
import db from "./mysql.js";
import cors from 'cors';
import bcrypt from 'bcryptjs';

const app = express();
app.use(express.json());
app.use(cors());

app.post("/input", (req, res) => {
    const q = "insert into cryptoprice(date, currency, inr, usd, eur, gbp, jpy) VALUES(?)";
    const input = [req.body.date, req.body.currency, req.body.val1, req.body.val2, req.body.val3, req.body.val4, req.body.val5];
    db.query(q, [input], (err, data) => {
        if (err) return res.json(err);
        res.status(200).json('Value Added Successfully');
        console.log('Value Added Successfully!');
    })
});




app.post("/createtable", (req, res) => {
    const q = "CREATE TABLE users(email varchar(100), username varchar(50), password varchar(100))";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        res.status(200).json('Table created Successfully');
        console.log('Table Created Successfully!');
    });
});

app.post("/signup", async(req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const q = "INSERT INTO users(email, username, password) VALUES(?);";
        const input = [
            req.body.email,
            req.body.username,
            hash,
        ];
        db.query(q, [input], (err, data) => {
            if (err) return res.json(err);
            res.status(200).json('Value Added Successfully');
            console.log('Value Added Successfully!');
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


app.post("/login", async(req, res) => {
    const q = "SELECT * FROM users WHERE email = ?;";
    const input = [req.body.email];
    try {
        db.query(q, [input], (err, data) => {
            if (err) return res.json(err);
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
            if (isPasswordCorrect) res.status(200).json("Login Successful");
            else res.status(403).json("Wrong username or password");
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// app.post("/addData", (req, res) => {
//     const q = "insert into test values('pranaav')";
//     db.query(q, (err, data) => {
//         if (err) return res.json(err);
//         res.status(200).json(data);
//         console.log('data added');
//     });
// });


app.listen(3001, (req, res) => {
    console.log("Server started on PORT 3001...");
})