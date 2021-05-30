import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const NecklageSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Necklage;
