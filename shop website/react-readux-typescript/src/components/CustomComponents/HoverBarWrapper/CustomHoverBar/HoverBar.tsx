import React from 'react';

import { BarWrapper, MainBar } from './HoverBar.component';
import { HoverBarProps } from '../types';

const HoverBar: React.FC<HoverBarProps> = ({
  imgNumber,
  durationInSec,
  activate,
  repeate,
}) => {
  const duration = imgNumber ? imgNumber * 2 + 's' : durationInSec;
  return (
    <>
      <BarWrapper>
        <MainBar
          activate={activate}
          durationInSec={duration}
          repeate={repeate}
        />
      </BarWrapper>
    </>
  );
};

export default HoverBar;
