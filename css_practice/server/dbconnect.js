import mongoose from "mongoose";

async function mongodbConnect () {
    await mongoose.connect("")
    try {
        console.log("Server is now connected");
    }
    catch(error) {
        console.log(error)
    }
}
mongodbConnect();
