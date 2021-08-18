import React from 'react';

import { Word } from './styled';

export const renderer = (tag, size, color) => {
	const { className } = tag.props || {};
  const fontSize = `${size}px`;
  const lineHeight = `${size * lineHeightCalc()}px`;
  const fontWeight = `${fontWeightCalc()}`;
  const top = `${Math.floor(Math.random() * 12)}px`;
  const left = `${Math.floor(Math.random() * 12)}px`;
  const key = tag.key || tag.value;
	const cloudClassName = `word-cloud-unit ${className}`;

  function lineHeightCalc() {
    if (size > 15) return 1.7;
    if (size > 35) return 1.6;
    if (size > 45) return 0.1;
    return 1.8;
  };

  function fontWeightCalc() {
    if (size > 35) return 400;
    if (size > 45) return 500;
    return 300;
  };

  return (
    <Word
			key={key}
			className={cloudClassName}
			color={color}
			lineHeight={lineHeight}
			fontWeight={fontWeight}
			fontSize={fontSize}
			top={top}
			left={left}
			>
      {tag.value}
    </Word>
  );
};