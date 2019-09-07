import styled from 'styled-components';
import theme from 'theme';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;

export default Container;
