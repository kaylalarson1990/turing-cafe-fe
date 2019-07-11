import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ name, date, time, number }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className="cancel-btn">Cancel</button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

export default Card;
