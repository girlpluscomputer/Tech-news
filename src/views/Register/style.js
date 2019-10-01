import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .title {
    font-size: ${props => props.theme.font.md};
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

  input {
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.font.sm};
    padding: 4px 16px;
    margin: 4px 0;
  }

  form {
    width: 256px;
    padding: 30px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }

  .logo-container {
    margin: auto;
    padding: 10px 0;
  }

  .some-text {
    font-size: ${props => props.theme.font.sm};

    a {
      color: ${props => props.theme.colors.secondary};
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Card;
