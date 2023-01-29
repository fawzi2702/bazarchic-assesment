import { createContext, useContext, useEffect, useState } from 'react'

import { Post } from '@/interfaces/Post.interface'

import { usePostsQuery } from '../hooks/posts.hook'

export const usePostStore = (initialPosts: Post[], initialPage: number) => {
  const [initialized, setInitialized] = useState<boolean>(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!Array.isArray(initialPosts)) {
      return
    }

    setPosts(initialPosts)
    setPage(initialPage)

    const isLast = initialPage === null
    if (isLast) {
      setHasMore(false)
    } else {
      setPage(initialPage)
    }

    setInitialized(true)
  }, [initialPosts])

  const getNextPosts = async () => {
    if (!initialized || isLoading || !hasMore) {
      return
    }
    setLoading(true)

    const { posts: newPosts, nextPage, error } = await usePostsQuery(page)
    if (error) {
      setLoading(false)
      return
    }

    setPosts((oldPosts) => [...oldPosts, ...newPosts])

    const isLast = nextPage === null
    if (isLast) {
      setHasMore(false)
    } else {
      setPage(nextPage)
    }

    setLoading(false)
  }

  return {
    posts,
    hasMore,
    isLoading,
    initialized,

    getNextPosts,
  }
}

export type PostStore = ReturnType<typeof usePostStore>

export const PostStoreContext = createContext<PostStore>(null)

export const getPostStore = () => {
  return useContext(PostStoreContext)
}
