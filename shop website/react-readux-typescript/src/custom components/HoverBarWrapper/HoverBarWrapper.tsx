import React, { useState } from 'react';
import HoverBar from '../CustomHoverBar/HoverBar';
import { HoverBarWrapperProps } from '../types';

const HoverBarWrapper: React.FC<HoverBarWrapperProps> = ({
  children,
  durationInSec,
  repeate,
  imgNumber,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={(): void => setIsHover(true)}
      onMouseLeave={(): void => setIsHover(false)}
    >
      {children}
      <HoverBar
        isHovering={isHover}
        durationInSec={durationInSec}
        repeate={repeate}
        imgNumber={imgNumber}
      />
    </div>
  );
};

export default HoverBarWrapper;
