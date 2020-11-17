import { ApolloProvider } from '@apollo/client'
import Articles from './Articles'
import client from './api/gqlConnection'

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Articles />
      </div>
    </ApolloProvider>
  );
}
