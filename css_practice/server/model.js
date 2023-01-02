import mongoose from "mongoose";

const schema = new mongoose.Schema({
    memberName: {
        type: String,
        required: true
    },
    file: {
        type: Array,
        default: []
    }
})

const Filemodel = mongoose.model("userfiles", schema, "userssavefile")
export default Filemodel;