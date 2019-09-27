import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.lightgray};
`;

const Navbar = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 16px;
  background-color: #000;
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
      font-size: ${props => props.theme.font.sm};
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
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 40px;
  background-color: ${props => props.theme.colors.lightgray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { Container, Navbar, Content };
