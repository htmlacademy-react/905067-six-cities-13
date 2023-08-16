export type Offer = {
  id: string;
  src: string;
  title: string;
  premium: boolean;
  rating: string;
  offerType: string;
  bedroomsCount: number;
  gusetCount: number;
  price: number;
  additional: string[];
  city: string;
  cordinates: { latitude: number; longitude: number; zoom: number };
};

export type Offers = Offer[];
