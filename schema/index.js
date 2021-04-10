import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema, GraphQLNonNull } from 'graphql';
import { createLaunch, deleteLaunch, getAllLaunches, getSingleLaunch, updateLaunch } from '../resolvers/launch.js';
import { createRocket, deleteRocket, getAllRockets, getSingleRocket, updateRocket } from '../resolvers/rocket.js';

import LaunchType from '../typeDef/launchType.js';
import RocketType from '../typeDef/rocketType.js'





const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : () => ({
        launches : {
            type : new GraphQLList(LaunchType),
            resolve : getAllLaunches
        },
        launch : {
            type : LaunchType,
            args : { flight_number : { type : GraphQLInt}},
            resolve : getSingleLaunch
        },
        rockets : {
            type : new GraphQLList(RocketType),
            resolve : getAllRockets
        },
        rocket : {
            type : RocketType,
            args : { rocket_id : { type : GraphQLInt}},
            resolve : getSingleRocket
        },

    })
});

const RootMutation = new GraphQLObjectType({
    name : 'Mutation',
    description : 'Root Mutation',
    fields : () => ({
        createRocket : {
            type : RocketType,
            args : {
                rocket_id : { type : GraphQLNonNull(GraphQLInt)},
                rocket_name : { type : GraphQLNonNull(GraphQLString)},
                rocket_type : { type : GraphQLNonNull(GraphQLString)},
            },
            resolve :  createRocket
        },
        updateRocket : {
            type : RocketType,
            args : {
                rocket_id : { type : GraphQLNonNull(GraphQLInt)},
                rocket_name : { type : GraphQLNonNull(GraphQLString)},
                rocket_type : { type : GraphQLNonNull(GraphQLString)},
            },
            resolve : updateRocket
        },
        deleteRocket : {
            type : RocketType,
            args : {
                rocket_id : { type : GraphQLNonNull(GraphQLInt)}
            },
            resolve : deleteRocket
        },

        createLaunch : {
            type : LaunchType,
            args : {
                flight_number : { type : GraphQLInt },
                mission_name : { type : GraphQLString },
                launch_year : { type : GraphQLInt },
                launch_date_local : { type : GraphQLString },
                launch_success : { type : GraphQLBoolean },
            },
            resolve : createLaunch
        },
        updateLaunch : {
            type : LaunchType,
            args : {
                flight_number : { type : GraphQLInt },
                mission_name : { type : GraphQLString },
                launch_year : { type : GraphQLInt },
                launch_date_local : { type : GraphQLString },
                launch_success : { type : GraphQLBoolean },
            },
            resolve : updateLaunch
        },
        deleteLaunch : {
            type : LaunchType,
            args : {
                flight_number : { type : GraphQLInt }
            },
            resolve : deleteLaunch
        }
    })
})

export default new GraphQLSchema({
    query : RootQuery,
    mutation : RootMutation
})