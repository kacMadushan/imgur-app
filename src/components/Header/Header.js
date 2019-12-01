import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
    <header className="header">
        <div className="container">
            {children}
        </div>
    </header>
);

Header.propTypes = {
    children: PropTypes.node.isRequired
}

export default Header;