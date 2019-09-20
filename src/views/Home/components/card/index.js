import React from 'react';
import Card from './style';
import BaselineStarBorder from 'react-md-icon/dist/BaselineStarBorder';

const CardStorie = ({ story, formatDate }) => {
  const { time, title, by } = story;

  return (
    <Card>
      <div className="date-container">
        <p className="date">{formatDate(time)}</p>
        <button className="fav-icon">
          <BaselineStarBorder />
        </button>
      </div>
      <div className="title">{title}</div>
      <div className="author">By {by}</div>
    </Card>
  );
};

export default CardStorie;
