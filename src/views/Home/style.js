import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.gray};
`;

const Navbar = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 16px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);

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
      color: ${props => props.theme.colors.black};
    }

    .user-icon {
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        width: 14px;
        color: ${props => props.theme.colors.black};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { Container, Navbar, Content };
