import React from 'react';
import {AppConstants} from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    render() {
        return  (
            <div>
                <h5>{this.props.name}</h5>
        <button onClick={this.props.updateScore}>{AppConstants.PlayerButtonText}</button>
            </div>
        );
    }
}
Player.propTypes = {
    name:PropTypes.string,
    updateScore:PropTypes.func
}
Player.defaultProps = {
    name:"Props not passed"
}