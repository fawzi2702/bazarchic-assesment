import { FC } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

import { Post } from '@/interfaces/Post.interface'

interface Props {
  readonly post: Post
}

export const PostCard: FC<Props> = ({ post }) => {
  return (
    <Col xs={12} md={6} lg={4} className="my-2">
      <Card key={post.id} className="h-100">
        <CardHeader className="py-2">
          <Row className="align-items-center">
            <Col xs={2}>
              <div className="py-1 px-2 bg-dark text-white rounded-1 d-flex justify-content-center">
                <span>{post.id}</span>
              </div>
            </Col>

            <Col xs={10}>
              <h4 className="mb-0 text-truncate">{post.title}</h4>
            </Col>
          </Row>
        </CardHeader>

        <CardBody>
          <p className="text-muted">{post.body}</p>
        </CardBody>
      </Card>
    </Col>
  )
}
