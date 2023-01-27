import { User } from '@/interfaces/User.type'

export const userTransformer = (data: any): User => {
  if (!data) {
    throw 'invalid_user'
  }

  return {
    id: data.id,
    username: data.username,
  }
}
