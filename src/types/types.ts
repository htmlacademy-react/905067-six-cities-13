export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};
export type User = {
  id: number;
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type TokenData = {
  avatarUrl: string;
  email: string;
  isPro: boolean;
  name: string;
  token: string;
};
export type id = number;
