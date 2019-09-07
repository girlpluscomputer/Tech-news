import React from 'react';
import StyledLoader from './style'

const Loader = () => {
  return(
    <StyledLoader class="spinner">
      <div class="rect1" />
      <div class="rect2" />
      <div class="rect3" />
      <div class="rect4" />
      <div class="rect5" />
    </StyledLoader>
  );
}

export default Loader;
