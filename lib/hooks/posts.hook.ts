import { Post } from '@/interfaces/Post.interface'

import { apolloClient } from '../helpers/apolloClient'
import { POSTS_QUERY } from '../query/posts.query'
import { postsTransformer } from '../transformers/post.transformer'
import { DEFAULT_PAGE_SIZE } from '../utils/pagination'

export const usePostsQuery = async (
  page: number,
): Promise<{ posts: Post[]; nextPage: number; error: Error }> => {
  const { posts, nextPage, error } = await apolloClient
    .query({
      query: POSTS_QUERY,
      variables: {
        page,
        limit: DEFAULT_PAGE_SIZE,
      },
    })
    .then((result) => {
      const response = result.data.posts

      return Promise.resolve({
        posts: postsTransformer(response.data),
        nextPage: response.links?.next?.page || null,
        error: null,
      })
    })
    .catch((error) => Promise.reject({ posts: null, nextPage: null, error }))

  return { posts, nextPage, error }
}
