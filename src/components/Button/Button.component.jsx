import propTypes from 'prop-types';

import './Button.styles.css';

const Button = ({buttonText, handleClick, className=""}) => {
  return (
    <button className={className} onClick={handleClick}>{buttonText}</button>
  )
}

Button.propTypes = {
  buttonText: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
  className: propTypes.string.Optional
}

export default Button;