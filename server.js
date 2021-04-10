import express from 'express';
import { graphqlHTTP, } from 'express-graphql';
import schema from './grapqhl/schema/index.js'
import './database/db.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () =>  console.log(`The server is running on port ${PORT}`));