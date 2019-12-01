import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, name, size }) => (
    <img className={size} src={src} alt={name} />
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}

export default Image;