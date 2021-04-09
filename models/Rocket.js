import mongoose from 'mongoose';
const { Schema } = mongoose;

const RocketModel = new Schema({
    rocket_id: {
        type : Number,
        required : true
    },
    rocket_name: {
        type : String,
        required : true
    },
    rocket_type: {
        type : String,
        required : true
    }
})

export default mongoose.model('Rocket', RocketModel);