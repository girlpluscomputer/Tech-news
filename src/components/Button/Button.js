import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  font-size: ${props => props.theme.font.sm};
  background-color: #4CA1AF;
  color: #fff;
  cursor: pointer;
  outline: none;
/* 
  ${props => props.theme.media.tablet`
    padding: 8px 32px;
    font-size: ${props => props.theme.font.md};
  `}

  ${props => props.theme.media.phone`
    padding: 8px 32px;
    font-size: ${props => props.theme.font.md};
  `}

  ${props => props.theme.media.bigPhone`
    padding: 8px 32px;
    font-size: ${props => props.theme.font.md};
  `} */
`;

export default Button;
