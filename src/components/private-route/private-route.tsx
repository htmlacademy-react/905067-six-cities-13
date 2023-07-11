import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

const PrivateRoute = ({ authorizationStatus, children }: PrivateRouteProps) =>
  authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );

export default PrivateRoute;
