import React, { PropTypes } from 'react';

const Input = ({
  id,
  className,
  type,
  placeholder,
  value,
  onBlur,
  onChange,
  onKeyDown,
}) => (
  <input
    id={id}
    className={className}
    type={type}
    placeholder={placeholder}
    value={value}
    onBlur={onBlur}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
