import styled, { keyframes } from 'styled-components';
import theme from 'theme';

const stretchdelay = keyframes`
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
`;

const StyledLoader = styled.div`
  width: 50px;
  height: 30px;
  font-size: 10px;
  text-align: center;
  

  div {
    background-color: ${theme.colors.primary};
    height: 100%;
    width: 3px;
    display: inline-block;
    -webkit-animation: ${stretchdelay} 1.2s infinite ease-in-out;
    animation: ${stretchdelay} 1.2s infinite ease-in-out;
    margin: 0px 1px;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
`;

export default StyledLoader;
