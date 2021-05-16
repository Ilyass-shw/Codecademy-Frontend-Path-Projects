export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  imgs: string[];
}

export type categories =
  | 'NECKLACE'
  | 'RING'
  | 'ARMCUFF'
  | 'BRACELET'
  | 'EARRINGS';

export interface DataItem extends Item {
  category: categories;
}
