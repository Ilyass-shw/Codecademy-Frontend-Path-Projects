import { useSelector } from 'react-redux';
import { Item } from '../../../../helpers/types';
import { AllJewellrySelector } from '../../ProductsSlice/selectors/AllJewelrySelector';
import { ArmcuffSelector } from '../../ProductsSlice/selectors/ArmcuffSelector';
import { BraceletSelector } from '../../ProductsSlice/selectors/BraceletSelector';
import { EarringsSelector } from '../../ProductsSlice/selectors/EarringsSelector';
import { NecklageSelector } from '../../ProductsSlice/selectors/NecklageSelector';
import { RingSelector } from '../../ProductsSlice/selectors/RingSelector';

export const getProductsByFilter = (filter: string): Item[] => {
  switch (filter) {
    case 'Necklage': {
      return useSelector(NecklageSelector);
    }

    case 'Ring': {
      return useSelector(RingSelector);
    }

    case 'Armcuff': {
      return useSelector(ArmcuffSelector);
    }

    case 'Bracelet':
      return useSelector(BraceletSelector);

    case 'Earrings':
      return useSelector(EarringsSelector);
    default:
      return useSelector(AllJewellrySelector);
  }
};
