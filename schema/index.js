import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } from 'graphql';
import axios from 'axios';

const url_launches = 'https://api.spacexdata.com/v3/launches';
const url_rockets = 'https://api.spacexdata.com/v3/rockets';

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
                return axios.get(url_launches).then(res => res.data)
            }
        },
        launch : {
            type : LaunchType,
            args : { flight_number : { type : GraphQLInt}},
            resolve : (parent, args) => {
                return axios.get(`${url_launches}/${args.flight_number}`).then(res => res.data)
            }
        },
        rockets : {
            type : new GraphQLList(RocketType),
            resolve : (parent, args) => {
                return axios.get(url_rockets).then(res => res.data)
            }
        },
        rocket : {
            type : RocketType,
            args : { rocket_id : { type : GraphQLString}},
            resolve : (parent, args) => {
                return axios.get(`${url_rockets}/${args.rocket_id}`).then(res => res.data)
            }
        },

    }
})

export default new GraphQLSchema({
    query : RootQuery,
})