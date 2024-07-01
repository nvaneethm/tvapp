import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, tabIndex }) => {
  const buttonRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      style={{ padding: '10px 20px', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number,
};

Button.defaultProps = {
  tabIndex: 0,
};

export default Button;