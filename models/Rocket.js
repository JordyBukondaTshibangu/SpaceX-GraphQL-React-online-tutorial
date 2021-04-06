import mongoose from 'mongoose';
const { Schema } = mongoose;

const RocketModel = new Schema({
    rocket_name: {
        type : String,
        required : true
    },
    rocket_type: {
        type : String,
        required : true
    }
})

export default mongoose.model('Launch', RocketModel);