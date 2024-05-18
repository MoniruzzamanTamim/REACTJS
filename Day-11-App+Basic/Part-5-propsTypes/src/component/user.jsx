import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  return (
    <div>
      <h3>{props.user.id}</h3>
      <h3>{props.user.name}</h3>
      <h3>{props.username}</h3>
      <h3>{props.rollNumber}</h3>
    </div>
  );
};


User.propTypes = {
// CheckString DAta
username: PropTypes.string,

  // Check Object And Array Data type
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.number,
  }),
};

// Props ar vallue emty hoile default akta vallu show koebe
User.defaultProps = {
  rollNumber: "default Roll Number",
  
};

export default User;