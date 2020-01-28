import React from 'react';
import Player from './Player';
import Scorer from './Scorer';
import {AppConstants} from '../constants/App.constants';

export default class TennisGame extends React.Component {
    render() {
        return  (
        <div>
            <div className="playerContainer"> 
                <div className="leftContainer">
                    <Player name={AppConstants.Player1Name}></Player>
                </div>
                <Player name={AppConstants.Player2Name}></Player>                
            </div>
            <Scorer />
        </div>);
    }        
 }