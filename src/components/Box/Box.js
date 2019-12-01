import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ type, children }) => (
    <div className={type}>{children}</div>
);

Box.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Box;