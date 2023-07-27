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

}
