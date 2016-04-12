import React, { PropTypes } from 'react';

const Input = ({
  id,
  className,
  autoFocus,
  type,
  placeholder,
  value,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
}) => (
  <input
    id={id}
    autoFocus={autoFocus}
    className={className}
    type={type}
    placeholder={placeholder}
    value={value}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    onKeyDown={onKeyDown}
  />
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
