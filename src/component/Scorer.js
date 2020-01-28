import React from 'react';
import {AppConstants} from '../constants/App.constants';

export default class Scorer extends React.Component {
    render() {
        return  (
            <div>
                <h5>{AppConstants.ScoreText}</h5>
                <label>{AppConstants.InitialScore}</label>               
            </div>
        );
    }
}