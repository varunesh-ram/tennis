import React from 'react';
import {AppConstants} from '../constants/App.constants';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    render() {
        if (!this.props.isGameOver)
        return  (
            <div>
                <h5>{this.props.name}</h5>
        <button onClick={this.props.updateScore}>{AppConstants.PlayerButtonText}</button>
            </div>
        );
        return(<h5>{this.props.name}</h5>);
    }
}
Player.propTypes = {
    name:PropTypes.string,
    updateScore:PropTypes.func,
    isGameOver:PropTypes.bool
}
Player.defaultProps = {
    name:"Props not passed",
    isGameOver:true
}