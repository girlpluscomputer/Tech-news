import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.lightgray};
`;

const Navbar = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 16px;
  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-content: center;
  }

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 70px;
    }
  }

  .user {
    display: flex;
    flex-direction: row;

    p {
      font-size: ${theme.font.sm};
      padding: 0 4px;
      color: #fff;
    }

    .user-icon {
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        width: 14px;
        color: #fff;
      }

      svg:hover {
        color: ${theme.colors.secondary};
      }
    }
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 40px;
  background-color: ${theme.colors.lightgray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { Container, Navbar, Content };
