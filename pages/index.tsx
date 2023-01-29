import { GetStaticProps } from 'next'
import { FC } from 'react'
import { Container } from 'reactstrap'

import { Post } from '@/interfaces/Post.interface'
import { PostsList } from '@/lib/components/PostsList'
import { Layout } from '@/lib/helpers/Layout'
import { usePostsQuery } from '@/lib/hooks/posts.hook'
import { PostStoreContext, usePostStore } from '@/lib/stores/post.store'

interface Props {
  readonly posts: Post[]
  readonly nextPage: number
}

const Home: FC<Props> = ({ posts: initialPosts, nextPage: initialPage }) => {
  const postStore = usePostStore(initialPosts, initialPage)

  return (
    <PostStoreContext.Provider value={postStore}>
      <Layout>
        <Container fluid className="p-4">
          <PostsList />
        </Container>
      </Layout>
    </PostStoreContext.Provider>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { posts, nextPage } = await usePostsQuery(1)

  return {
    props: {
      nextPage,
      posts,
    },
    revalidate: 10, // 10 minutes
  }
}
