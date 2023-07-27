import { Comments } from '../types/comments';

const IMAGE_URL = 'https://i.pravatar.cc/128';

export const comments: Comments = [
  {
    id: 31233244411111,
    src: IMAGE_URL,
    userName: 'Max',
    userRate: '80%',
    reviewText:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    reviewDate: 'April 2013',
  },
  {
    id: 31233211231111,
    src: IMAGE_URL,
    userName: 'Liza',
    userRate: '60%',
    reviewText:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    reviewDate: 'April 2011',
  },
  {
    id: 312332111131211,
    src: IMAGE_URL,
    userName: 'Alex',
    userRate: '20%',
    reviewText: 'A quiet cozy and picturesque.',
    reviewDate: 'April 2019',
  },
];
