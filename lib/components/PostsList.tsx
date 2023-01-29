import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Spinner } from 'reactstrap'

import { getPostStore } from '../stores/post.store'
import { PostCard } from './PostCard'

const InfiniteScrollLoader: FC = () => (
  <Row className="mt-4 p-2 justify-content-center">
    <Spinner />
  </Row>
)

export const PostsList: FC = () => {
  const { posts, hasMore, getNextPosts } = getPostStore()

  return (
    <InfiniteScroll
      hasMore={hasMore}
      loadMore={getNextPosts}
      initialLoad={false}
      loader={<InfiniteScrollLoader />}>
      <Row>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Row>
    </InfiniteScroll>
  )
}
