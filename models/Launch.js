import mongoose from 'mongoose';
const { Schema } = mongoose;

const LaunchModel = new Schema({
    mission_name : {
        type : String,
        required : true
    },
    launch_year: {
        type : String,
        required : true
    },
    launch_success: {
        type : String,
        required : true
    },
    launch_date_local: {
        type : String,
        required : true
    },
    rocket : {
        type : Schema.Types.ObjectId,
        ref : 'Rocket'
    }

})

export default mongoose.model('Launch', LaunchModel);