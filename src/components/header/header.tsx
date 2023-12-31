import Logo from '../logo/logo';
import HeaderLogin from '../header-login/header-login';
import { useAppSelector } from '../../hooks';
import { getUserName } from '../../store/user-process/selectors';

const Header = () => {
  const userName = useAppSelector(getUserName);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderLogin userName={userName} />
        </div>
      </div>
    </header>
  );
};

export default Header;
