import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema, GraphQLID, GraphQLNonNull } from 'graphql';
import {launches, rockets} from './data.js'

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
        rocket_id : { type : GraphQLInt },
        rocket_name : { type : GraphQLString },
        rocket_type : { type : GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : () => ({
        launches : {
            type : new GraphQLList(LaunchType),
            resolve : (parent, args) => {
                return launches
            }
        },
        launch : {
            type : LaunchType,
            args : { flight_number : { type : GraphQLInt}},
            resolve : (parent, args) => {
                const launch = launches.filter(launch => launch.flight_number === args.flight_number)
                return launch[0]
            }
        },
        rockets : {
            type : new GraphQLList(RocketType),
            resolve : (parent, args) => {
                return rockets;
            }
        },
        rocket : {
            type : RocketType,
            args : { rocket_id : { type : GraphQLInt}},
            resolve : (parent, args) => {
                const rocket = rockets.filter(rocket => rocket.rocket_id === args.rocket_id);
                return rocket[0];
            }
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
            resolve : (parent, args) => {
                const { rocket_id, rocket_name, rocket_type } = args;
                const newRocket = {rocket_id, rocket_name, rocket_type}
                rockets.push(newRocket);
                return newRocket;
            } 
        },
        updateRocket : {
            type : RocketType,
            args : {
                rocket_id : { type : GraphQLNonNull(GraphQLInt)},
                rocket_name : { type : GraphQLNonNull(GraphQLString)},
                rocket_type : { type : GraphQLNonNull(GraphQLString)},
            },
            resolve : (parent, args) => {
                const { rocket_id, rocket_name, rocket_type } = args;
                const newRocket = {rocket_id, rocket_name, rocket_type }
                const rocketToBeupdated = rockets.filter(rocket => rocket.rocket_id === rocket.rocket_id)
                console.log(rocketToBeupdated)
                // rockets.push(newRocket);
                return newRocket;
            } 
        },
        deleteRocket : {
            type : RocketType,
            args : {
                rocket_id : { type : GraphQLNonNull(GraphQLInt)}
            },
            resolve : (parent, { rocket_id}) => {
                const rocketToBeDeleted = rockets.filter(rocket => rocket.rocket_id === rocket_id);
                return rocketToBeDeleted[0];
            }
        },
        createLaunch : {
            type : LaunchType,
            args : {
                mission_name : { type : GraphQLString },
                launch_year : { type : GraphQLString },
                launch_date_local : { type : GraphQLString },
                launch_success : { type : GraphQLBoolean },
                rocket : { type : RocketType }
            },
            resolve : (parent, args) => {

                const  {
                    mission_name ,
                    launch_year ,
                    launch_date_local ,
                    launch_success 
                } = args
                const newLaunch = { flight_number : launches.length + 1 , mission_name , launch_year , launch_date_local , launch_success };
                launches.push(newLaunch)

                return newLaunch;
            }
        },
        updateLaunch : {
            type : LaunchType,
            args : {
                mission_name : { type : GraphQLString },
                launch_year : { type : GraphQLString },
                launch_date_local : { type : GraphQLString },
                launch_success : { type : GraphQLBoolean },
            },
            resolve : (parent, args) => {

                const  {
                    mission_name ,
                    launch_year ,
                    launch_date_local ,
                    launch_success 
                } = args
                
                
                // return args;
            }
        },
        deleteLaunch : {
            type : LaunchType,
            args : {
                flight_number : { type : GraphQLInt }
            },
            resolve : (parent, { flight_number}) => {
                // find and delete from model
            }
        }
    })
})

export default new GraphQLSchema({
    query : RootQuery,
    mutation : RootMutation
})