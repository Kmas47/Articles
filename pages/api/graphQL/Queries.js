import { gql } from '@apollo/client'


export const GET_ARTICLES = gql 
`
query {
    firstPageArticles {
      title
      text
      type
      url
    }
  }
`;

export const GET_ALLARTICLES = gql
`
query($cursor: Int!) {
  retrievePageArticles(page: $cursor) {
    title
    text
    type
    url 
  }
}
`;