import React from 'react';
import StyledLoader from './style';

const Loader = () => {
  return (
    <StyledLoader className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </StyledLoader>
  );
};

export default Loader;
