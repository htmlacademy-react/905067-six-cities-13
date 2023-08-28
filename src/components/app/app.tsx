import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';
import { getOffersDataLoadingStatus } from '../../store/app-process/selectors';

const App = () => {
  const isOffersDataLoading = useAppSelector(
    getOffersDataLoadingStatus
  );


  if (isOffersDataLoading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <Favorites/>
          </PrivateRoute>
        }
      />
      <Route path={`${AppRoute.Offer}:id`} element={<Offer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
