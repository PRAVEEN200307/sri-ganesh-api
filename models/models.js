import mongoose from "mongoose";

const schema = new mongoose.Schema({
    phone: Number,
    textInput: {
        type:String,
        required: true,
        unique: true
    },
    Email: String,
    fullName: String
});


const contactData = mongoose.model('contactData', schema);

export default contactData