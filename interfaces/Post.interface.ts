import { User } from './User.type'

export interface Post {
  readonly id: string
  readonly title: string
  readonly body: string
  readonly user: User
}
