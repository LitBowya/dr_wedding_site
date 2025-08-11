import React, { forwardRef } from 'react';

const SplittableText = forwardRef(({ text, as: Component = 'h1', ...props }, ref) => {
  const letters = text.split('').map((letter, index) => (
    <span key={index} className="letter inline-block" style={{'--letter-index': index}}>
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  return (
    <Component ref={ref} {...props}>
      {letters}
    </Component>
  );
});

export default SplittableText;

