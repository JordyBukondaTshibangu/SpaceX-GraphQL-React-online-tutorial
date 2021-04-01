import express from 'express';
import { graphqlHTTP, } from 'express-graphql';

const app = express();
const PORT = process.env.PORT || 4000;

import schema from './schema/index.js'; 


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () =>  console.log(`The server is running on port ${PORT}`));