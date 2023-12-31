import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFavOffers } from '../../store/favorite-data/selectors';
import { AppRoute } from '../../const';

type HeaderLoginProps = {
  userName: string;
};

const HeaderLogin = ({ userName }: HeaderLoginProps) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthorizationStatus);
  const favoritesCount = useAppSelector(getFavOffers).length;
  const onSignOutClick = () => {
    dispatch(logoutAction());
  };
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth && (
          <>
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to="/favorites"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">{userName}</span>
                <span className="header__favorite-count">{favoritesCount}</span>
              </Link>
            </li>

            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                onClick={onSignOutClick}
                to="#"
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        )}
        {!isAuth && (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default HeaderLogin;
