import Launch from '../../models/Launch.js';

export const getAllLaunches = async (parent, args) => {
    const launches = await Launch.find();
    return launches;
};
export const getSingleLaunch = async (parent, {flight_number}) => {
    const launch = await Launch.findOne({flight_number});
    return launch;
};
export const createLaunch = async(parent, args) => {
    const  { flight_number, mission_name , launch_year , launch_date_local , launch_success } = args
    const newLaunch = new Launch({ flight_number , mission_name , launch_year , launch_date_local , launch_success });
    await newLaunch.save();
    return newLaunch;
};
export const updateLaunch = async(parent, args) => {
    const  { flight_number, mission_name , launch_year , launch_date_local , launch_success } = args;
    const updatedLaunch = { flight_number, mission_name , launch_year , launch_date_local , launch_success }; 
    const newLaunch = await Launch.findOneAndUpdate({flight_number}, updatedLaunch);
    return newLaunch;
};
export const  deleteLaunch = async (parent, { flight_number}) => {
    const launchToBeDeleted = await Launch.findOneAndDelete({flight_number});
    return launchToBeDeleted;
}
