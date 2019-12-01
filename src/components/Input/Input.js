import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, type, placeholder, value, onChange }) => (
    <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

Input.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;