import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
function NotFound(): JSX.Element {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>6 cities. 404</title>
      </Helmet>
      <h1>404 Not Found</h1>
      <p>К сожалению такой страницы не существует.</p>
      <Link to="/" style={{ textDecoration: 'underline' }}>
        Вернуться на главную страницу
      </Link>
    </div>
  );
}

export default NotFound;
