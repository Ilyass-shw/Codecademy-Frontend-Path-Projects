export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  imgs: string[];
}

export type categories =
  | 'Necklage'
  | 'Ring'
  | 'Armcuff'
  | 'Bracelet'
  | 'Earrings';

export interface DataItem extends Item {
  category: categories;
}
