import { Comments } from '../../types/comments';
import Review from '../review/review';

type ReviewsListProps = {
  comments: Comments;
};

const ReviewsList = ({ comments }: ReviewsListProps) => (
  <ul className="reviews__list">
    {comments.map((comment) => (
      <Review commentData={comment} key={comment.id} />
    ))}
  </ul>
);

export default ReviewsList;
