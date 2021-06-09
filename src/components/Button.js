import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--disabled'];
const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

export const Button = ({
  children,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];
  return (
    <Link to={linkTo} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </Link>
  );
};
