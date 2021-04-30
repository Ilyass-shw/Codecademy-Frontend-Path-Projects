import React from 'react';

import { BarWrapper, MainBar } from './HoverBar.component';
import { HoverBarProps } from '../types';

const HoverBar: React.FC<HoverBarProps> = ({
  //   imgNumber,
  durationInSec,
  isHovering,
  repeate,
}) => {
  return (
    <>
      <BarWrapper>
        <MainBar isHovering={isHovering} durationInSec={durationInSec} repeate={repeate}/>
      </BarWrapper>
    </>
  );
};

export default HoverBar;
