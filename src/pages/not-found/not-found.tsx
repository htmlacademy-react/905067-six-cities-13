import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import './not-found.css';

const NotFound = () => (
  <div className="not-found__container">
    <Header />
    <Helmet>
      <title>6 cities. 404</title>
    </Helmet>
    <h1>404 Not Found</h1>
    <p>К сожалению такой страницы не существует.</p>
    <Link className="not-found__link" to={AppRoute.Root}>
      Вернуться на главную страницу
    </Link>
  </div>
);

export default NotFound;
