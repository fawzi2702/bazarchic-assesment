import { Post } from '@/interfaces/Post.interface'

import { userTransformer } from './user.transformer'

export const postsTransformer = (data: any[]): Post[] => {
  if (!Array.isArray(data)) {
    throw 'invalid_posts'
  }

  return data.map((item) => postTransformer(item))
}

export const postTransformer = (data: any): Post => {
  if (!data) {
    throw 'invalid_post'
  }

  return {
    id: data.id,
    title: data.title,
    body: data.body,
    user: userTransformer(data.user),
  }
}
