import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  bigPhone: 600,
  phone: 576,
  smallPhone: 350
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
