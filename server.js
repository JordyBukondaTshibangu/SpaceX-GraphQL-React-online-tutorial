import express from 'express';
import { graphqlHTTP, } from 'express-graphql';
import schema from './schema/index.js'; 
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;



app.use(cors()) // Use this after the variable declaration


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () =>  console.log(`The server is running on port ${PORT}`));