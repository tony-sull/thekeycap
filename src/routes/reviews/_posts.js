import { getPostsByType } from '../../utils/posts'

export default function getPosts() {
  return getPostsByType('reviews')
}
