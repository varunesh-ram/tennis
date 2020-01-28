import React from 'react';
import Player from './Player';
import Scorer from './Scorer';
import {AppConstants} from '../constants/App.constants';

export default class TennisGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            player1Score:0,
            player2Score:0
        }
        this.player1Scores = this.player1Scores.bind(this);
        this.player2Scores = this.player2Scores.bind(this);
    }
    player1Scores(){
        this.setState({player1Score:this.state.player1Score + 1});
    }
    player2Scores(){
        this.setState({player2Score:this.state.player2Score + 1});
    }
    render() {
        return  (
        <div>
            <div className="playerContainer"> 
                <div className="leftContainer">
                    <Player name={AppConstants.Player1Name} updateScore={this.player1Scores}></Player>
                </div>
                <Player name={AppConstants.Player2Name} updateScore={this.player2Scores}></Player>                
            </div>
            <Scorer />
        </div>);
    }        
 }