import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import {
  ToggleButton,
  ButtonContent,
  ButtonHeader,
  TotalPrice,
} from './SummaryToggleButton.component';

interface SummaryToggleButtonProps {
  show: boolean;
  clickHandle: React.Dispatch<React.SetStateAction<boolean>>;
  TotalToPay: number;
}
const SummaryToggleButton: React.FC<SummaryToggleButtonProps> = ({
  show,
  clickHandle,
  TotalToPay,
}) => {
  return (
    <ToggleButton onClick={() => clickHandle(!show)}>
      <ButtonContent>
        <ButtonHeader>
          <AiOutlineShoppingCart size="27" />
          {show ? 'Show Order summray' : 'Hide Order summray'}
          <IoMdArrowDropdown size="27" />
        </ButtonHeader>
        <TotalPrice> {'$' + TotalToPay.toFixed(2)}</TotalPrice>
      </ButtonContent>
    </ToggleButton>
  );
};

export default SummaryToggleButton;
