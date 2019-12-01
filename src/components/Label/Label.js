import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor}>{children}</label >
);

Label.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string.isRequired
}

export default Label;