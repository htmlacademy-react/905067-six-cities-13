import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute } from '../../const';
type AppProps = {
  offersCount: number;
};

const App = ({ offersCount }: AppProps) => (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main offersCount={offersCount} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={<Favorites />} />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
);
export default App;
