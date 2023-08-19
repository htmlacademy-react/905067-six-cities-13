import Logo from '../logo/logo';
import HeaderLogin from '../header-login/header-login';
import { useAppSelector } from '../../hooks';

type HeaderProps = {
  isAuth: boolean;
};

const Header = ({ isAuth }: HeaderProps) => {
  const userName = useAppSelector((state) => state.userName);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderLogin isAuth={isAuth} userName={userName} />
        </div>
      </div>
    </header>
  );
};

export default Header;
