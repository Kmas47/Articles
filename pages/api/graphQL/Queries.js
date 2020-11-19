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
query {
  retrievePageArticles(page: 1) {
    title
    text
    type
    url 
  }
}
`;