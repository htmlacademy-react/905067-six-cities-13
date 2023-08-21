import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../services/browser-history';

const App = () => {
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );
  const isAuth = useAppSelector((state) => state.authorizationStatus);
  const offers = useAppSelector((state) => state.offers);

  if (isOffersDataLoading) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute isAuth={isAuth}>
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Offer}:id`} element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};
export default App;
