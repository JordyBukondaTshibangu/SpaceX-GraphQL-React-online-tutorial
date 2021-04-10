import { gql } from '@apollo/client';

export const ADD_LAUNCH = gql`
    mutation CreateLaunchMutation(
        $flight_number:Int! 
        $launch_year:Int! 
        $launch_date_local:String! 
        $launch_success:Boolean! 
        $mission_name:String!) {
            createLaunch(
                flight_number: $flight_number,
                launch_year: $launch_year,
                launch_date_local: $launch_date_local,
                launch_success: $launch_success,
                mission_name: $mission_name){
                    flight_number
                    launch_year
                    launch_date_local
                    launch_success
                    mission_name
                }
}
`;
export const UPDATE_LAUNCH = gql`
    mutation UpdateLaunchMutation(
        $flight_number:Int 
        $launch_year:Int 
        $launch_date_local:String 
        $launch_success:Boolean 
        $mission_name:String) {
            updateLaunch(
                flight_number: $flight_number,
                launch_year: $launch_year,
                launch_date_local: $launch_date_local,
                launch_success: $launch_success,
                mission_name: $mission_name){
                    flight_number
                    launch_year
                    launch_date_local
                    launch_success
                    mission_name
                }
    }
`;
export const DELETE_LAUNCH = gql`
    mutation DeleteLaunchMutation($flight_number:Int!){
        deleteLaunch(flight_number : $flight_number){
            flight_number
            launch_year
            launch_date_local
            launch_success
            mission_name
        }
}`