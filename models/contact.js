const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    name:{type:String,required:true},
    prenom:{type:String, required :true},
    email:{type: String, required:true,unique:true},
    age: Number,
    tele:Number
})
module.exports=mongoose.model("contact",contactSchema)