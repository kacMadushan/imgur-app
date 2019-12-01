import React from 'react';
import PropTypes from 'prop-types';
import Lable from '../Label/Label';

const Toogle = ({ isToggle, handleChangeToggle }) => (
    <div className="field">
        <input
            id="switchRoundedSuccess"
            type="checkbox"
            name="switchRoundedSuccess"
            className="switch is-rounded is-success"
            checked={isToggle}
            onChange={handleChangeToggle}
        />
        <Lable htmlFor="switchRoundedSuccess">Display Result</Lable>
    </div>
);

Toogle.propTypes = {
    isToggle: PropTypes.bool.isRequired,
    handleChangeToggle: PropTypes.func.isRequired
}

export default Toogle;