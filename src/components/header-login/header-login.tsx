import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type HeaderLoginProps = {
  userName: string;
};

const HeaderLogin = ({ userName }: HeaderLoginProps) => {
  const isAuth = useAppSelector((state) => state.authorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {isAuth && (
            <Link
              className="header__nav-link header__nav-link--profile"
              to="/favorites"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{userName}</span>
            </Link>
          )}
          {!isAuth && (
            <Link
              className="header__nav-link header__nav-link--profile"
              to="/login"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default HeaderLogin;
