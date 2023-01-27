import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Container, Row } from 'reactstrap'

import { getPostStore } from '../stores/post.store'
import { PostCard } from './PostCard'

export const PostsList: FC = () => {
  const { posts, hasMore, getNextPosts } = getPostStore()

  return (
    <Container>
      <InfiniteScroll hasMore={hasMore} loadMore={getNextPosts} initialLoad={false} threshold={700}>
        <Row>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  )
}
