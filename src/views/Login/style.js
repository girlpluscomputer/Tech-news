import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .image-container {
    display: flex;
    justify-content: center;
    background-color: #fff;
  }

  .title {
    font-size: ${props => props.theme.font.xl};
    font-weight: bold;
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

  input {
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: #f0f0f0;
    font-size: ${props => props.theme.font.xl};
    padding: 4px 16px;
    margin: 4px 0;
  }

  form {
    width: 40%;
    padding: 60px;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
  }

  .some-text {
    font-size: ${props => props.theme.font.xl};
  }

  .button-container {
    width: 100%;
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    align-self: flex-end;
  }
  
  ${props => props.theme.media.tablet`
    form {
      width: 60%;
      padding: 40px;
    }
    .title {
      font-size: ${props => props.theme.font.lg};
    }

    input {
      font-size: ${props => props.theme.font.lg};
    }

    .some-text {
      font-size: ${props => props.theme.font.lg};
      margin-top: 20px;
    }

    .button-container {
      display: flex;
      flex-direction: column-reverse;
    }
  `}

  ${props => props.theme.media.bigPhone`
    form {
      width: 80%;
      padding: 40px;
    }

    .title {
      font-size: ${props => props.theme.font.lg};
    }

    input {
      font-size: ${props => props.theme.font.lg};
    }

    .some-text {
      font-size: ${props => props.theme.font.lg};
      margin-top: 20px;
    }

    .button-container {
      display: flex;
      flex-direction: column-reverse;
    }
`}

  ${props => props.theme.media.phone`
    form {
      width: 95%;
      padding: 40px;
    }

    .title {
      font-size: ${props => props.theme.font.lg};
    }

    input {
      font-size: ${props => props.theme.font.lg};
    }

    .some-text {
      font-size: ${props => props.theme.font.lg};
      margin-top: 20px;
    }

    .button-container {
      display: flex;
      flex-direction: column-reverse;
      justify-items: center;
    }
  `}
`;

export default Card;
