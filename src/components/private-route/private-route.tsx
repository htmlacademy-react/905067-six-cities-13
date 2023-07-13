import { AppRoute } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  isAuth: boolean;
  children: JSX.Element;
};

const PrivateRoute = ({ isAuth, children }: PrivateRouteProps) =>
  isAuth ? children : <Navigate to={AppRoute.Login} />;

export default PrivateRoute;
