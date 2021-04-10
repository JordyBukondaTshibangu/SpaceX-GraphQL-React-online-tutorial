import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema, GraphQLNonNull } from 'graphql';

const RocketType = new GraphQLObjectType({
    name : 'Rocket',
    fields : () => ({
        rocket_id : { type : GraphQLInt },
        rocket_name : { type : GraphQLString },
        rocket_type : { type : GraphQLString },
    })
});

export default RocketType;