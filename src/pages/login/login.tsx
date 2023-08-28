import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import { useRef, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, CITY, FORM_ERROR_TEXT, TOAST_POSITION } from '../../const';
import { toast } from 'react-toastify';
import browserHistory from '../../services/browser-history';
import { changeCity } from '../../store/app-process/app-process';
import { CityList } from '../../types/types';

type ObjectKey = keyof typeof CITY;

const Login = () => {
  const isAuth = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  const loginRef = useRef<HTMLInputElement | null>(null);

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const getRandomCityName = (obj: CityList) => {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const randomCity = CITY[getRandomCityName(CITY) as ObjectKey];

  const handleRandomCityClick = () => {
    browserHistory.push(AppRoute.Root);
    dispatch(changeCity(randomCity));
  };

  const passwordValidation = (password: string): boolean =>
    /^(?=.*[a-z])(?=.*\d).*$/.test(password);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      if (passwordValidation(passwordRef.current.value)) {
        dispatch(
          loginAction({
            login: loginRef.current.value,
            password: passwordRef.current.value,
          })
        );
      } else {
        toast.error(FORM_ERROR_TEXT, { position: TOAST_POSITION});
      }
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={loginRef}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                onClick={handleRandomCityClick}
                className="locations__item-link"
                to={AppRoute.Root}
              >
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
