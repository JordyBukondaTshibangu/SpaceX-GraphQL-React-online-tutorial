import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } from 'graphql';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/launches';

const LaunchType = new GraphQLObjectType({
    name : 'Launch',
    fields : () => ({
        flight_number : { type : GraphQLInt },
        mission_name : { type : GraphQLString },
        launch_year : { type : GraphQLString },
        launch_date_local : { type : GraphQLString },
        launch_success : { type : GraphQLBoolean },
        rocket : { type : RocketType }
    })
});

const RocketType = new GraphQLObjectType({
    name : 'Rocket',
    fields : () => ({
        rocket_id : { type : GraphQLString },
        rocket_name : { type : GraphQLString },
        rocket_type : { type : GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        launches : {
            type : new GraphQLList(LaunchType),
            resolve : (parent, args) => {
                return axios.get(url).then(res => res.data)
            }
        }
    }
})

export default new GraphQLSchema({
    query : RootQuery,
})