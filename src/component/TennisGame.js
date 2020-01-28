import React from 'react';
import Player from './Player';
import Scorer from './Scorer';
import {AppConstants} from '../constants/App.constants';

export default class TennisGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            player1Score:0,
            player2Score:0,
            isGameOver:false
        }
        this.player1Scores = this.player1Scores.bind(this);
        this.player2Scores = this.player2Scores.bind(this);
        this.notifyGameOver = this.notifyGameOver.bind(this);
    }
    player1Scores(){
        this.setState({player1Score:this.state.player1Score + 1});
    }
    player2Scores(){
        this.setState({player2Score:this.state.player2Score + 1});
    }
    notifyGameOver(){
        this.setState({isGameOver:true});
    }

    render() {
        return  (
        <div>
            <div className="playerContainer"> 
                <div className="leftContainer">
                    <Player name={AppConstants.Player1Name} updateScore={this.player1Scores} isGameOver={this.state.isGameOver}></Player>
                </div>
                <Player name={AppConstants.Player2Name} updateScore={this.player2Scores} isGameOver={this.state.isGameOver}></Player>                
            </div>
            <Scorer player1Score={this.state.player1Score} player2Score={this.state.player2Score} isGameOver={this.notifyGameOver}></Scorer>
        </div>);
    }        
 }