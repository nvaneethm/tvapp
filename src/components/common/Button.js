import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, tabIndex }) => (
  <button onClick={onClick} tabIndex={tabIndex}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number,
};

Button.defaultProps = {
  tabIndex: 0,
};

export default Button;