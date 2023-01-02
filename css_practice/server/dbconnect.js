import mongoose from "mongoose";

async function mongodbConnect () {
    await mongoose.connect("mongodb+srv://docexp:2EYpdOYQRKI5mBQo@cluster0.oqm2c.mongodb.net/test")
    try {
        console.log("Server is now connected");
    }
    catch(error) {

    }
}
mongodbConnect();