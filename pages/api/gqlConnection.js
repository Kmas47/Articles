import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://fintros-frontend-assignment.herokuapp.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        'Content-Type': 'application/json' 
    },
   
});

export default client;