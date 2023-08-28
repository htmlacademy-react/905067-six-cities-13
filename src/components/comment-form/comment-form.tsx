import { FormEvent, useState } from 'react';
import StarInput from '../star-input/star-input';
import { COMMENT_MAX_LENGTH, starInputsData } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';
import { COMMENT_MIN_LENGTH } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCommentPostError } from '../../store/app-data/selectors';
import { toast } from 'react-toastify';

type CommentFormProps = {
  isAuth: boolean;
  offerId?: string;
};

const CommentForm = ({ isAuth, offerId }: CommentFormProps) => {
  const [commentText, setCommentText] = useState('');
  const [commentRate, setCommentRate] = useState('');
  const [isBlocked, setBlock] = useState(false);
  const dispatch = useAppDispatch();
  const [isValid, setValid] = useState(false);
  const commentPostError = useAppSelector(getCommentPostError);
  const clearComment = () => {
    setCommentText('');
    setCommentRate('0');
    setValid(false);
  };
  const unblockForm = () => {
    setBlock(false);
  };
  const onFormSubmit = (evt: FormEvent) => {
    if (offerId) {
      evt.preventDefault();
      setBlock(true);
      dispatch(
        postCommentAction({
          comment: {
            comment: commentText,
            rating: parseInt(commentRate, 10),
          },
          offerId: offerId,
          clearComment: clearComment,
          unblockForm: unblockForm,
        })
      );

    }
  };
  if (commentPostError) {
    toast.error('There was a problem posting your comment. Please try again.', {
      toastId: 'postError',
      autoClose: 3000
    });
  }
  if (commentText.length <= COMMENT_MAX_LENGTH && commentText.length >= COMMENT_MIN_LENGTH && commentRate && !isValid) {
    setValid(true);
  }
  if (commentText.length > COMMENT_MAX_LENGTH && isValid || commentText.length < COMMENT_MIN_LENGTH && isValid || !commentRate && isValid) {
    setValid(false);
  }

  if (!isAuth) {
    return <h2 style={{ textAlign: 'center' }}>Login to add comments!</h2>;
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {starInputsData.map((data) => {
          const { value, title } = data;
          return (
            <StarInput
              value={value}
              id={`${value}-stars`}
              checkValue={value.toString()}
              title={title}
              disabled={isBlocked}
              commentRate={commentRate}
              setCommentRate={setCommentRate}
              key={value}
            />
          );
        })}
      </div>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isBlocked}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isBlocked || !isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
