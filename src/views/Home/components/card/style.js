import styled from 'styled-components';
import theme from '../../../../theme';

const Card = styled.div`
  width: 356px;
  padding: 8px;
  display: flex;
  margin-top: 5px;
  text-decoration: none;
  color: #000;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
  }

  .date-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .fav-icon {
    border: none;
    background-color: #fff;
    height: 14px;
    display: flex;
    align-items: center;
    outline: none;

    svg {
      width: 10px;
      height: 10px;
    }
  }

  .date {
    font-size: ${theme.font.sm};
    margin: 0;
  }

  .title {
    font-size: ${theme.font.md};
    font-weight: bold;
    padding: 2px 0;
  }

  .author {
    font-size: ${theme.font.sm};
  }
`;

export default Card;
