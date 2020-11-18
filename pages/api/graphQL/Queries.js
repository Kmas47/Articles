import { gql } from '@apollo/client'

export const GET_ARTICLES = gql 
`
query {
    firstPageArticles {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
    }
  }
`;