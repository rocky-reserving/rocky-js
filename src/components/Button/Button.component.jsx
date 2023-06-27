import propTypes from 'prop-types';

import './Button.styles.css';

const Button = ({buttonText, handleClick, classNameText}) => {
  return (
    <button className={classNameText ? classNameText : classNameText = ''} onClick={handleClick}>{buttonText}</button>
  )
}

Button.propTypes = {
  buttonText: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
  classNameText: propTypes.string
}

export default Button;