import { Comments } from '../../types/comments';
import Review from '../review/review';

type ReviewsListProps = {
  comments: Comments;
};

const ReviewsList = ({ comments }: ReviewsListProps) => {
  const displayedComments = [...comments];
  displayedComments.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  if (displayedComments.length > 10) {
    displayedComments.splice(10);
  }
  return (
    <ul className="reviews__list">
      {displayedComments.map((comment) => (
        <Review commentData={comment} key={comment.id} />
      ))}
    </ul>
  );
};

export default ReviewsList;
