import express from 'express';
import Filemodel from './model.js';
const app = express();
const port = 5000;
import './dbconnect.js';
app.use(express.json());


app.get("/hi", (req,res) => {
    res.send("Hi from server");
})

app.post("/postfile", async (req,res) => {
    let myUser = await Filemodel.findOne({memberName: req.body.memberName})
    if(!myUser) return res.status(200).json({error: "Cant find the user"})
    myUser.file.push(...req.body.file);
    await myUser.save();
    return res.status(200).json({msg: "Added successfully"});
})

app.post("/createuser", async (req,res) => {
    let myUser = await Filemodel.findOne({memberName: req.body.memberName})
    if(myUser) return res.status(200).json({error: "User already exists"})

    myUser = new Filemodel(req.body);
    await myUser.save();
    return res.status(200).json({msg: "Saved successfully"});
})

app.listen(port, () => {
    console.log("you are connected to port 5000")
})