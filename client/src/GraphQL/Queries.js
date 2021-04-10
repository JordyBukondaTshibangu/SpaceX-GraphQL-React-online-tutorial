import { gql } from '@apollo/client';

export const LAUNCHES_QUERIES = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

export const LAUNCH_QUERY = gql`
  query LaunchQuery ($flight_number: Int!){
      launch(flight_number: $flight_number){
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local
      }
  }
`;
