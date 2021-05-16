import { categories, DataItem } from '../../helpers/types';

export const filterWithCategory = (
  data: DataItem[],
  category: categories,
): DataItem[] => {
  return data.filter((item: DataItem) => {
    return item.category === category;
  });
};
