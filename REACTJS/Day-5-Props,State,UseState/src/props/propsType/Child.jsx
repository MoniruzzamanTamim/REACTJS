import React from "react";
import PropTypes from "prop-types";

function Child(props) {
  return (
    <div>
      <h3>Name: {props.user.name}</h3>
      <h3>Phone: {props.user.phone}</h3>
      <h4>Title: {props.title}</h4>
    </div>
  );
}

Child.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,

  title: PropTypes.number,
};

export default Child;
