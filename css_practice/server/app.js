import express from 'express';
const app = express();
const port = 5000;
import './dbconnect.js';
app.use(express.json());


app.get("/hi", (req,res) => {
    res.send("Hi from server");
})

app.post("/postfile", (req,res) => {
    
})

app.listen(port, () => {
    console.log("you are connected to port 5000")
})