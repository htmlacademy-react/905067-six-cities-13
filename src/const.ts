import { ToastPosition } from 'react-toastify';

export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer/',
  NotFound = '/*',
}
export enum SortTypeName {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorites = '/favorite',
}

export const starInputsData = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const CITY = {
  paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
  },
  cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    },
  },
  brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    },
  },
  amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    },
  },

  hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    },
  },
  dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    },
  },
};

export const STAR_RATING_PROPORTION = 0.05;

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
  Favorites = 'FAVORITES',
}

export const COMMENT_MIN_LENGTH = 50;
export const COMMENT_MAX_LENGTH = 300;

export const FORM_ERROR_TEXT =
  'Password was entered incorrectly, it must contain 1 letter and 1 digit.';
export const TOAST_POSITION: ToastPosition = 'top-center';
export const GLOBAL_TOAST_ID = 'toast-error';
export const TOAST_AUTOCLOSE_TIME = 3000;
