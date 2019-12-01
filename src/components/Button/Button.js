import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className }) => (
    <button className={`button btn-${className}`}> {children}</ button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired
}

export default Button;