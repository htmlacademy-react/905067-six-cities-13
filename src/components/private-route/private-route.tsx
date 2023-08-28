import { AppRoute } from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getAuthorizationStatusLoading } from '../../store/user-process/selectors';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
};


const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLoading = useAppSelector(getAuthorizationStatusLoading);
  const isAuth = useAppSelector(getAuthorizationStatus);
  if(isLoading){
    return <Spinner/>;
  }
  return isAuth ? children : <Navigate to={AppRoute.Login} />;
};
export default PrivateRoute;
