import { Fragment } from 'react';

type StartInputProps = {
  value: number;
  id: string;
  checkValue: string;
  title: string;
  commentRate: string;
  setCommentRate: (value: string) => void;
};

const StarInput = ({
  value,
  id,
  checkValue,
  title,
  commentRate,
  setCommentRate,
}: StartInputProps) => (
  <Fragment>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      defaultValue={value}
      id={id}
      type="radio"
      onChange={(e) => setCommentRate(e.target.value)}
      checked={commentRate === checkValue}
    />
    <label
      htmlFor={id}
      className="reviews__rating-label form__rating-label"
      title={title}
    >
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  </Fragment>
);

export default StarInput;
