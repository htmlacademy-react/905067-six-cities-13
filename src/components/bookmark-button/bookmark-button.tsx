import { useState } from 'react';
import browserHistory from '../../services/browser-history';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleFavoriteAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type BookmarkButtonProps = {
  favorite: boolean;
  id: string;
};

const BookmarkButton = ({ favorite, id }: BookmarkButtonProps) => {
  const dispatch = useAppDispatch();
  const [isFavorite, setFavorite] = useState(favorite);
  const isAuth = useAppSelector(getAuthorizationStatus);
  const onBookmarButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (!isAuth) {
      browserHistory.push(AppRoute.Login);
    }
    const value = !isFavorite;
    setFavorite(!isFavorite);
    dispatch(toggleFavoriteAction({ value, id }));
  };

  return (
    <button
      onClick={onBookmarButtonClick}
      className={`offer__bookmark-button ${
        isFavorite && isAuth ? 'offer__bookmark-button--active' : ''
      } button`}
      type="button"
    >
      <svg className="offer__bookmark-icon" width={31} height={33}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default BookmarkButton;
