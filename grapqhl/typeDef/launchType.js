import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema, GraphQLNonNull } from 'graphql';

const LaunchType = new GraphQLObjectType({
    name : 'Launch',
    fields : () => ({
        flight_number : { type : GraphQLInt },
        mission_name : { type : GraphQLString },
        launch_year : { type : GraphQLInt },
        launch_date_local : { type : GraphQLString },
        launch_success : { type : GraphQLBoolean },
    })
});

export default LaunchType;