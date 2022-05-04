import React from 'react';

import {Container, StarView, StartText} from './styles';

import StarFull from '../../assets/star.svg';
import StarHalf from '../../assets/star_half.svg';
import StarEmpty from '../../assets/star_empty.svg';

interface Iprops {
  stars: number;
  showNumber: boolean;
}

export function Stars({stars, showNumber}: Iprops) {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    s[i] = 2;
  }
  if (left > 0) {
    s[i] = 1;
  }

  return (
    <Container>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width={18} height={18} fill={'yellow'} />}
          {i === 1 && <StarHalf width={18} height={18} fill={'yellow'} />}
          {i === 2 && <StarFull width={18} height={18} fill={'yellow'} />}
        </StarView>
      ))}

      {showNumber && <StartText>{stars}</StartText>}
    </Container>
  );
}
