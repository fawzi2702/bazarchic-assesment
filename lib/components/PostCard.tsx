import { FC } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

import { Post } from '@/interfaces/Post.interface'

interface Props {
  readonly post: Post
}

export const PostCard: FC<Props> = ({ post }) => {
  return (
    <Col xs={12} md={6} className="my-2 h-100">
      <Card key={post.id} className="my-2 h-100">
        <CardHeader className="py-2 h-25">
          <Row className="align-items-center">
            <Col className="flex-grow-0">
              <div className="py-1 px-2 bg-dark text-white rounded-1">
                <span>{post.id}</span>
              </div>
            </Col>
            <Col className="flex-grow-1">
              <h3>{post.title}</h3>
            </Col>
          </Row>
        </CardHeader>

        <CardBody className="h-75">
          <p className="text-muted">{post.body}</p>
        </CardBody>
      </Card>
    </Col>
  )
}
