import express from 'express';
import Filemodel from './model.js';
const app = express();
const port = 5000;
import './dbconnect.js';
app.use(express.json());
import userData from './userData.json' assert { type: "json" };


app.get("/hi", (req, res) => {
    res.send("Hi from server");
})

app.post("/postfile", async (req, res) => {
    try {
        let myUser = await Filemodel.findOne({ memberName: req.body.memberName })
        if (!myUser) return res.status(200).json({ error: "Cant find the user" })
        if (myUser.file == null || myUser.file === []) {
            myUser.file = [];
        }
        myUser.file.length = req.body.file[0];
        await myUser.save();
        return res.status(200).json({ msg: "Added successfully" });
    }
    catch (error) {
        console.log(error);
    }

})

app.post("/createuser", async (req, res) => {
    try {
        let myUser = await Filemodel.findOne({ memberName: req.body.memberName })
        if (myUser) return res.status(200).json({ error: "User already exists" })

        myUser = new Filemodel(req.body);
        await myUser.save();
        return res.status(200).json({ msg: "Saved successfully" });
    }
    catch (error) {
        console.log(error);
    }

})

app.post("/addthefile", async( req, res) => {
    try {
        userData.userData.push(req.body);
        res.send("done")
    }
    catch(error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log("you are connected to port 5000")
})