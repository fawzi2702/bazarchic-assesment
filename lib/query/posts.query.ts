import { gql } from '@apollo/client'

export const POST_USER_FRAGMENT = gql`
  fragment PostUser on User {
    id
    username
  }
`

export const POST_FRAGMENT = gql`
  fragment Post on Post {
    id
    title
    body
    user {
      ...PostUser
    }
  }
  ${POST_USER_FRAGMENT}
`

export const POSTS_QUERY = gql`
  query Posts($page: Int!, $limit: Int!) {
    posts(options: { paginate: { page: $page, limit: $limit } }) {
      links {
        next {
          page
        }
      }
      data {
        ...Post
      }
    }
  }
  ${POST_FRAGMENT}
`
