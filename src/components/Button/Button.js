import styled from 'styled-components';

const Button = styled.button`
  border-radius: 16px;
  border: none;
  padding: 4px 16px;
  font-size: ${props => props.theme.font.lg};
  font-weight: bold;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.gray};
  cursor: pointer;
  outline: none;

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
  `}
`;

export default Button;

