import getLearnPosts from './learn/_posts'
import getReviewPosts from './reviews/_posts'

export default function getPosts() {
  const learn = getLearnPosts().map(({ metadata, slug }) => ({
    metadata,
    slug,
  }))
  const reviews = getReviewPosts().map(({ metadata, slug }) => ({
    metadata,
    slug,
  }))

  return {
    learn: learn.slice(0, 3),
    reviews: reviews.slice(0, 3),
  }
}
