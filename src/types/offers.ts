export type Offer = {
  id: number;
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
  cordinates: number[];
};

export type Offers = Offer[];
