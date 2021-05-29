import { RootState } from '../../../../App/store';
import { Item } from '../../../../helpers/types';

export const AllJewellrySelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.AllJewelry;

export const ArmcuffSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Armcuff;

export const BraceletSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Bracelet;

export const EarringsSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Earrings;

export const NecklageSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Necklage;

export const RingSelector = (state: RootState): Item[] =>
  state.Items.Products.jewelry.Ring;
