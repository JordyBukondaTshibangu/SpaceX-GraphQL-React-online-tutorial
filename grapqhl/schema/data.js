
export const rockets = [
    {
        rocket_id : 1,
        rocket_name: "APOLO 1",
        rocket_type: "APOLO 1"
    },
    {
        rocket_id : 2,
        rocket_name: "APOLO 2",
        rocket_type: "APOLO 2"
    },
    {
        rocket_id : 3,
        rocket_name: "APOLO 3",
        rocket_type: "APOLO 3"
    },
    {
        rocket_id : 4,
        rocket_name: "APOLO 4",
        rocket_type: "APOLO 4"
    },
    {
        rocket_id : 5,
        rocket_name: "APOLO 5",
        rocket_type: "APOLO 5"
    }
] 
export const launches = [
    {
        flight_number : 1,
        mission_name : "TEST 1",
        launch_year: "TEST 1",
        launch_success: true,
        launch_date_local: "TEST 1",
        rocket : rockets[0]
    },
    {
        flight_number : 2,
        mission_name : "TEST 2",
        launch_year: "TEST 2",
        launch_success: true,
        launch_date_local: "TEST 2",
        rocket : rockets[1]
    },
    {
        flight_number : 3,
        mission_name : "TEST 3",
        launch_year: "TEST 3",
        launch_success: true,
        launch_date_local: "TEST 3",
        rocket : rockets[2]
    },
    {
        flight_number : 4,
        mission_name : "TEST 4",
        launch_year: "TEST 4",
        launch_success: true,
        launch_date_local: "TEST 4",
        rocket : rockets[3]
    },
    {
        flight_number : 5,
        mission_name : "TEST 5",
        launch_year: "TEST 5",
        launch_success: false,
        launch_date_local: "TEST 5",
        rocket : rockets[4]
    },
]