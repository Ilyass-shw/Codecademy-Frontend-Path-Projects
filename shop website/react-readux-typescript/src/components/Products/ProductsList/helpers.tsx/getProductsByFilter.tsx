import { useSelector } from 'react-redux';
import { Item } from '../../../../helpers/types';
import { AllJewellrySelector } from '../../ProductsSlice/selectors/AllJewelrySelector';
import { ArmcuffSelector } from '../../ProductsSlice/selectors/ArmcuffSelector';
import { BraceletSelector } from '../../ProductsSlice/selectors/BraceletSelector';
import { EarringsSelector } from '../../ProductsSlice/selectors/EarringsSelector';
import { NecklageSelector } from '../../ProductsSlice/selectors/NecklageSelector';
import { RingSelector } from '../../ProductsSlice/selectors/RingSelector';

export const getProductsByFilter = (filter: string): Item[] => {
//   let products ;

  switch (filter) {
    case 'Necklage': {
    //   products =
    console.log('yaaasbi')

       return useSelector(NecklageSelector);
    //   break;
    }

    case 'Ring': {
    //   products =
    console.log('yaaas')
       return useSelector(RingSelector);
    //   break;
    }

    case 'Armcuff': {
    //   products =
       return useSelector(ArmcuffSelector);
    //   break;
    }

    case 'Bracelet':
    //   products =
       return useSelector(BraceletSelector);
    //   break;

    case 'Earrings':
    //   products =
       return useSelector(EarringsSelector);
    //   break;

    default:
        console.log('yaaas')

        return useSelector(AllJewellrySelector);

    }
//   return products;
};
