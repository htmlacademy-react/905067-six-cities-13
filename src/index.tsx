import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AppData } from './const';
import { offers } from './mocks/offers';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App offersCount={AppData.offersCount} offers={offers}/>
  </React.StrictMode>
);
