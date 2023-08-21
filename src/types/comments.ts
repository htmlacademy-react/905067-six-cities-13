export type Comment = {
  id: number;
  src: string;
  user: { avatarUrl: string; isPro: boolean; name: string };
  rating: number;
  comment: string;
  date: string;
};

export type PostComment = {
  comment: {
    comment: string;
    rating: number;
  };
  offerId: string;
  clearComment: () => void;
  unblockForm: () => void;
};

export type Comments = Comment[];
