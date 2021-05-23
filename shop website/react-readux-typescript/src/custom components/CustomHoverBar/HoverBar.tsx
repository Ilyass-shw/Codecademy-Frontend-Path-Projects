import React from 'react';

import { BarWrapper, MainBar } from './HoverBar.component';
import { HoverBarProps } from '../types';

const HoverBar: React.FC<HoverBarProps> = ({
  imgNumber,
  durationInSec,
  isHovering,
  repeate,
}) => {
  const duration = imgNumber ? imgNumber*3 + 's' : durationInSec;
  console.log(duration)
  return (
    <>
      <BarWrapper>
        <MainBar
          isHovering={isHovering}
          durationInSec={duration}
          repeate={repeate}
        />
      </BarWrapper>
    </>
  );
};

export default HoverBar;
