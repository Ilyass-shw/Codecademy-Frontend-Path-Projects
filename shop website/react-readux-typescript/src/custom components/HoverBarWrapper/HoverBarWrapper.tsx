import React, { useState } from 'react';
import HoverBar from '../CustomHoverBar/HoverBar';
import { HoverBarWrapperProps } from '../types';

const HoverBarWrapper: React.FC<HoverBarWrapperProps> = ({
  children,
  durationInSec,
  repeate,
  imgNumber,
  active,
}) => {
  const [isHover, setIsHover] = useState(false);
  const activate = active || isHover;
  return (
    <div
      onMouseEnter={(): void => setIsHover(true)}
      onMouseLeave={(): void => setIsHover(false)}
    >
      {children}
      <HoverBar
        activate={activate}
        durationInSec={durationInSec}
        repeate={repeate}
        imgNumber={imgNumber}
      />
    </div>
  );
};

export default HoverBarWrapper;
