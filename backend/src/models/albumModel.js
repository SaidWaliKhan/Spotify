import mongoose from "mongoose";


const albemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: { type: String, required: true },
  bgColor: { type: String, required: true },
  file: { type: String, required: true },
  image:{type:String , required:true}
})

const albumModel = mongoose.model.album || mongoose.model("album", albemSchema)

export default albumModel;