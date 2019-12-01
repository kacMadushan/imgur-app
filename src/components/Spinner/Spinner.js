import React from 'react';
import Image from '../Image/Image';

const Spinner = () => (
    <div className="column is-half is-offset-one-quarter">
        <div className="spinner">
            <Image size="loading" src="./assets/images/loader.gif" name="loading" />
        </div>
    </div>
);

export default Spinner;