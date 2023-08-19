import { useState } from 'react';
import StarInput from '../star-input/star-input';
import { starInputsData } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';

type CommentFormProps = {
  isAuth: boolean;
  offerId?: string;
};

const CommentForm = ({ isAuth, offerId }: CommentFormProps) => {
  const [commentText, setCommentText] = useState('');
  const [commentRate, setCommentRate] = useState('');
  const [isBlocked, setBlock] = useState(false);
  const dispatch = useAppDispatch();

  let isValid = true;
  if (commentText.length >= 50 && commentRate) {
    isValid = false;
  }
  if (!isAuth) {
    return <h2 style={{ textAlign: 'center' }}>Login to add comments!</h2>;
  }

  function clearComment() {
    setCommentText('');
    setCommentRate('0');
  }

  function unblockForm() {
    setBlock(false);
  }
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
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
      }}
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
          disabled={isBlocked || isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
