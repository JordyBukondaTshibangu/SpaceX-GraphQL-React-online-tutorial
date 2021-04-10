import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { onError } from "@apollo/client/link/error";
import Logo from './assets/spaceX.jpeg';
import Launches from './components/launch/Launches';
import Launch from './components/launch/Launch';
import NewLaunch from './components/launch/NewLaunch';
import './App.css';



const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({
    uri : 'http://localhost:5000/graphql'
  })
])
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});


const  App = () => {
  return (
      <ApolloProvider client={client}>
       <Router>
         
            <div className="App">
              <div className="container">
                  <img src={Logo} style={{ width : '300px', display: 'block', margin : 'auto'}} alt="logo" />
                  <div>
                    <Switch>
                      <Route exact path="/" component={Launches}/>
                      <Route exact path="/launch/:flight_number" component={Launch}/>
                      <Route exact path="/new-launch" component={NewLaunch}/>
                    </Switch>
                  </div>
              </div>
            </div>
       </Router>
      </ApolloProvider>
  );
}

export default App;
