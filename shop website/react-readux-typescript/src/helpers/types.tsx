export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  imgs: string[];
}
export interface DataItem extends Item {
  category: 'jewelry' | 'photoprints';
}
