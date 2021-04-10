import Rocket from '../../models/Rocket.js';

export const getAllRockets = async(parent, args) => {
    const rockets = await Rocket.find();
    return rockets;
};
export const getSingleRocket= async (parent, {rocket_id}) => {
    const rocket = await Rocket.findOne({rocket_id})
    return rocket;
};
export const createRocket = async (parent, args) => {
    const { rocket_id, rocket_name, rocket_type } = args;
    const newRocket = new Rocket({rocket_id, rocket_name, rocket_type});
    await newRocket.save();
    return newRocket;
};
export const updateRocket = async(parent, args) => {
    const { rocket_id, rocket_name, rocket_type } = args;
    const updatedRocket = {rocket_id, rocket_name, rocket_type }
    const newRocket = await Rocket.findOneAndUpdate({rocket_id}, updatedRocket);
    return newRocket;
};
export const  deleteRocket = async(parent, { rocket_id}) => {
    const rocketToBeDeleted = await Rocket.findOneAndDelete({rocket_id});
    return rocketToBeDeleted;
}