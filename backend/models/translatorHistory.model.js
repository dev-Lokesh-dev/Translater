import mongoose from "mongoose"

const translatorSchema = mongoose.Schema({
    email:{type:String,required:true},
    search:{type:String,required:true}
});

const translatorModel = mongoose.model('tanslatorModel',translatorSchema);

export {translatorModel}