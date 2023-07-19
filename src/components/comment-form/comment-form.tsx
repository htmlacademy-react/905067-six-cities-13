import { useState } from 'react';
import StarInput from '../star-input/star-input';
import { starInputsData } from '../../const';

const CommentForm = () => {
  const [commentText, setCommentText] = useState('');
  const [commentRate, setCommentRate] = useState('');
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {starInputsData.map((data) => (
          <StarInput
            value={data.value}
            id={data.id}
            checkValue={data.checkValue}
            title={data.title}
            commentRate={commentRate}
            setCommentRate={setCommentRate}
            key={data.value}
          />
        ))}
      </div>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
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
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
